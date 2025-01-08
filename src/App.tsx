import { Suspense, lazy } from 'react';
import { Loader } from './components';

const LandingPage = lazy(() => import('./LandingPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <LandingPage />
      </Suspense>
    </>
  );
}

export default App;
