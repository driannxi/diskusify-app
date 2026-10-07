import { useDispatch, useSelector } from 'react-redux';
import NotificationsSystem, { wyboTheme, setUpNotifications, dismissNotification } from 'reapop';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import { useEffect } from 'react';
import { asyncPreloadProcess } from './states/preload/action.js';
import { asyncLogout } from './states/auth/action.js';
import DetailPage from './pages/DetailPage.jsx';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading.jsx';

setUpNotifications({
  defaultProps: {
    position: 'top-right',
    dismissible: true,
    dismissAfter: 3000,
  },
  customizeNotification: (notification) => {
    notification.position = notification.position || 'top-right';
    notification.dismissible = notification.dismissible ?? true;
    notification.dismissAfter = notification.dismissAfter ?? 3000;
  },
});

function App() {
  const auth = useSelector((state) => state.auth);
  const preload = useSelector((state) => state.preload);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  function handleLogout() {
    dispatch(asyncLogout());
  }

  if (preload) {
    return <Loading />;
  }

  return (
    <>
      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dispatch(dismissNotification(id))}
        theme={wyboTheme}
      />
      <Loading />
      {auth === null ? (
        <>
          <main>
            <Routes>
              <Route path="/*" element={<AuthPage />} />
            </Routes>
          </main>
        </>
      ) : (
        <div className="bg-[#0b1326] min-h-screen text-[#cbd5e1] antialiased flex flex-col">
          <header>
            <Navbar onLogout={handleLogout} />
          </header>

          <main className="w-full pt-20 pb-12 bg-[#0b1326] min-h-screen flex-1">
            <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-8 py-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/threads/:id" element={<DetailPage />} />
              </Routes>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
