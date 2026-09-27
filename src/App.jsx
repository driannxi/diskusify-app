import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import { useEffect } from "react";
import { asyncPreloadProcess } from "./states/preload/action.js";
import { asyncLogout } from "./states/auth/action.js";

function App() {
  const auth = useSelector((state) => state.auth);
  const preload = useSelector((state) => state.preload);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  function handleLogout() {
    dispatch(asyncLogout());
  }

  if (preload) {
    return null;
  }

  if (auth === null) {
    return <AuthPage />;
  }
  return (
    <div className="bg-[#0b1326] min-h-screen text-[#cbd5e1] antialiased flex flex-col">
      <Navbar onLogout={handleLogout} />

      <main className="w-full pt-20 pb-12 bg-[#0b1326] min-h-screen flex-1">
        <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-8 py-6">
          <HomePage />
        </div>
      </main>
    </div>
  );
}

export default App;
