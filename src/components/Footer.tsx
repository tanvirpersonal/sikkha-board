import { Link } from 'react-router-dom';
import { NAV } from '../data/nav';
import { useI18n } from '../i18n';
import './Footer.css';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong className="footer-title">{t({ en: 'Dhaka Education Board', bn: 'ঢাকা শিক্ষা বোর্ড' })}</strong>
          <p>
            {t({
              en: 'Concept redesign of a digital portal. Demonstration content only. Official contact details, addresses and services will be added only after verification against the official source.',
              bn: 'ডিজিটাল পোর্টালের ধারণামূলক নকশা। শুধুমাত্র প্রদর্শনীমূলক বিষয়বস্তু। অফিসিয়াল যোগাযোগের তথ্য, ঠিকানা ও সেবা যাচাইয়ের পরেই যুক্ত করা হবে।',
            })}
          </p>
        </div>
        <nav aria-label={t({ en: 'Footer', bn: 'ফুটার' })}>
          <ul className="footer-links">
            {NAV.filter((n) => n.path !== '/').map((n) => (
              <li key={n.path}>
                <Link to={n.path}>{t(n.label)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer-bar">
        <div className="container">
          {t({
            en: 'Not affiliated with or endorsed by the Government of Bangladesh.',
            bn: 'বাংলাদেশ সরকারের সঙ্গে সম্পৃক্ত বা অনুমোদিত নয়।',
          })}
        </div>
      </div>
    </footer>
  );
}
