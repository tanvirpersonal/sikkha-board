import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useI18n } from '../i18n';

export default function Layout() {
  const { t } = useI18n();
  return (
    <>
      <a href="#main" className="skip-link">
        {t({ en: 'Skip to main content', bn: 'মূল বিষয়বস্তুতে যান' })}
      </a>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
