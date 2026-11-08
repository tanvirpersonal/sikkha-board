import { Route, Routes } from 'react-router-dom';
import { useI18n } from './i18n';

function Placeholder() {
  const { t } = useI18n();
  return (
    <main id="main" className="container section">
      <p className="eyebrow">{t({ en: 'Concept build', bn: 'ধারণামূলক সংস্করণ' })}</p>
      <h1>{t({ en: 'Dhaka Education Board Portal', bn: 'ঢাকা শিক্ষা বোর্ড পোর্টাল' })}</h1>
      <p className="muted">
        {t({
          en: 'In development. This is a demonstration redesign, not an official website.',
          bn: 'উন্নয়নাধীন। এটি একটি প্রদর্শনীমূলক নকশা, অফিসিয়াল ওয়েবসাইট নয়।',
        })}
      </p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Placeholder />} />
    </Routes>
  );
}
