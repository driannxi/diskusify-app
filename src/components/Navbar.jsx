
export default function Navbar({ onLogout }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/95 backdrop-blur-xl border-b border-[#1e293b] shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-[1320px] mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6 shrink-0">
          <a
            className="flex items-center gap-2 group"
            data-path="diskusi-populer"
            href="#"
          >
            <img
              alt="Diskusify Forum Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLtXb2hVuPV_186IXkmjjdEvXXSJC-YLcq1QQoZY0jsEp8_tmSuR1h1PMXkX1dP0bSbxabjudKLglyasavBVZSrjfXVfl_ve2_U38GE6CYkEVLcSRsFWJUbtjK8PXgw8ZPK8gNZ4yF24aPbqVbZWkrPAEQIw5s8_OkpUqnuqRVaXCIlOrRuC7WiZ1U4jpgSd8gt47tTyqx0GtRjCuHeiLVRgM5b0vgGETSJWUFv-HaaAJCxKBPVqJX"
            />
            <span className="text-[22px] font-bold tracking-tight text-[#818cf8]">
              Diskusify
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-2 pl-1">
            <a
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-[#1e293b] text-xs font-semibold tracking-wide transition-colors"
              href="#"
            >
             Leaderboard
            </a>
            <a
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-[#1e293b] text-xs font-semibold tracking-wide transition-colors"
              href="#"
            >
              About
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="w-64 lg:w-72 hidden md:flex items-center">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
                search
              </span>
              <input
                className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-[#0a101f] text-slate-100 placeholder:text-slate-400 border border-[#232f48] text-xs focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
                placeholder="Cari thread, ide, topik, atau solusi..."
                type="text"
              />
            </div>
          </div>
          <button
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#232f48] bg-[#131b2e] hover:bg-[#1e293b] text-slate-300 hover:text-red-400 text-xs font-semibold transition-all cursor-pointer"
            title="Keluar dari akun"
            type="button"
            onClick={onLogout}
          >
            <span className="material-symbols-outlined text-[18px]">
              logout
            </span>
            <span>Keluar</span>
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-[#1e293b]">
            <button
              className="flex items-center p-0.5 rounded-full hover:ring-2 hover:ring-[#6366f1] transition-all cursor-pointer"
              type="button"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-600"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8F6CMs0iI1FvAp1gAkhN8aXquU4aUvHx5dApboAU_JEAuZxL_QCv86YUhw5Cjs05DWshsHzipcdX31BqMYopye0EhEe0UEJRclaTa6Z9whrn3LQC8Hz8zsVvEySMpoksxHoFdTTt3ZzhzqQ1rViHRS18LXPKYPLqL_7iJHRW5bXXAx2jR1eHkmVc2DeqRsbA9BX72ouBkcQrvViIWDc6UPvp3ph_7dZyaJVX426o7RT9JIKGzUDgM"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
