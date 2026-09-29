import { useState } from 'react';
import LoginInput from '../components/LoginInput';
import RegisterInput from '../components/RegisterInput';
import { useDispatch } from 'react-redux';
import { asyncLogin, asyncRegister } from '../states/auth/action';

function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    dispatch(asyncLogin({ email, password }));
  };

  const handleRegister = ({ name, email, password }) => {
    dispatch(asyncRegister({ name, email, password }));
    setActiveTab('login');
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 relative overflow-hidden bg-[#0b1326] text-slate-100">
      {/* Ambient subtle glowing orbs backdrop */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[360px] bg-[#6366f1]/10 rounded-full blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[480px] h-[320px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <div className="w-full max-w-md mx-auto my-auto py-8 relative z-10">
        {/* Auth Card Container */}
        <div className="bg-[#131b2e] rounded-xl border border-[#232f48] shadow-2xl shadow-black/50 p-6 md:p-8 backdrop-blur-sm">
          {/* Tab Switcher */}
          <div className="flex bg-[#0b1326] p-1 rounded-lg mb-6 border border-[#1e293b]">
            <button
              className={`flex-1 py-2 rounded-md text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'login'
                  ? 'bg-[#1e293b] text-white shadow-sm border border-[#334155]/60'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
              type="button"
              onClick={() => setActiveTab('login')}
            >
              <span
                className={`material-symbols-outlined text-base ${
                  activeTab === 'login' ? 'text-[#6366f1]' : ''
                }`}
              >
                login
              </span>
              <span>Masuk</span>
            </button>

            <button
              className={`flex-1 py-2 rounded-md text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'register'
                  ? 'bg-[#1e293b] text-white shadow-sm border border-[#334155]/60'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
              type="button"
              onClick={() => setActiveTab('register')}
            >
              <span
                className={`material-symbols-outlined text-base ${
                  activeTab === 'register' ? 'text-[#6366f1]' : ''
                }`}
              >
                person_add
              </span>
              <span>Daftar Akun</span>
            </button>
          </div>

          {/* Form Content */}
          {activeTab === 'login' ? (
            <LoginInput onLogin={handleLogin} />
          ) : (
            <RegisterInput onRegister={handleRegister} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
