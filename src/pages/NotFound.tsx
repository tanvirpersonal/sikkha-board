import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <main id="main" className="container section">
      <p className="eyebrow">404</p>
      <h1>{t({ en: 'Page not found', bn: 'পেজটি পাওয়া যায়নি' })}</h1>
      <p className="muted">
        {t({
          en: 'The page you are looking for does not exist or has moved.',
          bn: 'আপনি যে পেজটি খুঁজছেন তা নেই বা সরানো হয়েছে।',
        })}
      </p>
      <p>
        <Link to="/">{t({ en: 'Back to home', bn: 'হোমে ফিরে যান' })}</Link>
      </p>
    </main>
  );
}
