import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { NAV } from './data/nav';
import InDevelopment from './pages/InDevelopment';
import NotFound from './pages/NotFound';

// Every navigation path is routed so no menu link is ever broken.
// Pages that are built get a dedicated route above this list in later phases.
const paths = NAV.flatMap((n) => [n.path, ...(n.children?.map((c) => c.path) ?? [])]);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {paths.map((p) => (
          <Route key={p} path={p} element={<InDevelopment />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
