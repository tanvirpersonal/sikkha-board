import { Link, useLocation } from 'react-router-dom';
import { NAV } from '../data/nav';
import { useI18n, type Label } from '../i18n';

function findLabel(path: string): { label: Label; parent?: { label: Label; path: string } } | null {
  for (const item of NAV) {
    if (item.path === path) return { label: item.label };
    const child = item.children?.find((c) => c.path === path);
    if (child) return { label: child.label, parent: { label: item.label, path: item.path } };
  }
  return null;
}

export default function InDevelopment() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const found = findLabel(pathname);
  const title = found ? t(found.label) : pathname;

  return (
    <main id="main" className="container section">
      <nav aria-label="Breadcrumb" className="muted">
        <Link to="/">{t({ en: 'Home', bn: 'হোম' })}</Link>
        {found?.parent && (
          <>
            {' / '}
            <Link to={found.parent.path}>{t(found.parent.label)}</Link>
          </>
        )}
        {' / '}
        <span aria-current="page">{title}</span>
      </nav>
      <p className="eyebrow">{t({ en: 'Awaiting implementation', bn: 'বাস্তবায়নের অপেক্ষায়' })}</p>
      <h1>{title}</h1>
      <p className="muted">
        {t({
          en: 'This section is planned but not built yet. No official information is shown here.',
          bn: 'এই অংশটি পরিকল্পিত কিন্তু এখনো তৈরি হয়নি। এখানে কোনো অফিসিয়াল তথ্য দেখানো হচ্ছে না।',
        })}
      </p>
    </main>
  );
}
