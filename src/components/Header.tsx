import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, type NavItem } from '../data/nav';
import { useI18n } from '../i18n';
import './Header.css';

function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang" role="group" aria-label="Language">
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')} lang="en">
        EN
      </button>
      <button type="button" aria-pressed={lang === 'bn'} onClick={() => setLang('bn')} lang="bn">
        বাং
      </button>
    </div>
  );
}

function DesktopItem({
  item,
  open,
  onToggle,
}: {
  item: NavItem;
  open: boolean;
  onToggle: () => void;
}) {
  const { t } = useI18n();
  if (!item.children) {
    return (
      <li>
        <NavLink to={item.path} end={item.path === '/'} className="nav-link">
          {t(item.label)}
        </NavLink>
      </li>
    );
  }
  const panelId = `menu-${item.path.slice(1)}`;
  return (
    <li className="has-menu">
      <button
        type="button"
        className="nav-link"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {t(item.label)}
        <span aria-hidden="true" className="caret" />
      </button>
      <ul id={panelId} className="menu" hidden={!open}>
        <li>
          <NavLink to={item.path} end className="menu-link menu-overview">
            {t({ en: 'Overview', bn: 'সারসংক্ষেপ' })}
          </NavLink>
        </li>
        {item.children.map((c) => (
          <li key={c.path}>
            <NavLink to={c.path} className="menu-link">
              {t(c.label)}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <nav id="mobile-nav" className="mobile-nav" aria-label="Primary">
      <ul>
        {NAV.map((item) => (
          <li key={item.path}>
            {item.children ? (
              <>
                <button
                  type="button"
                  className="m-link"
                  aria-expanded={expanded === item.path}
                  onClick={() => setExpanded(expanded === item.path ? null : item.path)}
                >
                  {t(item.label)}
                  <span aria-hidden="true" className="caret" />
                </button>
                <ul hidden={expanded !== item.path} className="m-sub">
                  <li>
                    <Link to={item.path} onClick={onNavigate}>
                      {t({ en: 'Overview', bn: 'সারসংক্ষেপ' })}
                    </Link>
                  </li>
                  {item.children.map((c) => (
                    <li key={c.path}>
                      <Link to={c.path} onClick={onNavigate}>
                        {t(c.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={item.path} className="m-link" onClick={onNavigate}>
                {t(item.label)}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Header() {
  const { t } = useI18n();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close menus on route change.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Escape closes; outside click closes the desktop dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="concept-bar">
        <div className="container">
          {t({
            en: 'Concept redesign. Demonstration only, not an official website.',
            bn: 'ধারণামূলক নকশা। শুধুমাত্র প্রদর্শনীর জন্য, অফিসিয়াল ওয়েবসাইট নয়।',
          })}
        </div>
      </div>
      <div className="container identity">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">D</span>
          <span className="brand-text">
            <strong>{t({ en: 'Dhaka Education Board', bn: 'ঢাকা শিক্ষা বোর্ড' })}</strong>
            <small>
              {t({
                en: 'Board of Intermediate and Secondary Education, Dhaka',
                bn: 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, ঢাকা',
              })}
            </small>
          </span>
        </Link>
        <div className="tools">
          <LanguageToggle />
          <button
            type="button"
            className="burger"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">{t({ en: 'Menu', bn: 'মেনু' })}</span>
            <span aria-hidden="true" className="burger-bars" />
          </button>
        </div>
      </div>
      <nav className="desktop-nav" aria-label="Primary" ref={navRef}>
        <ul className="container">
          {NAV.map((item) => (
            <DesktopItem
              key={item.path}
              item={item}
              open={openMenu === item.path}
              onToggle={() => setOpenMenu(openMenu === item.path ? null : item.path)}
            />
          ))}
        </ul>
      </nav>
      {mobileOpen && <MobileMenu onNavigate={() => setMobileOpen(false)} />}
    </header>
  );
}
