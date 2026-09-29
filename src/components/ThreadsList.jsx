import ThreadItem from './ThreadItem.jsx';

export default function ThreadList({ thread }) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 w-full">
      <div className="bg-[#131b2e] rounded-xl p-4 shadow-md border border-[#232f48] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366f1]/20 text-[#818cf8] flex items-center justify-center border border-[#6366f1]/30">
            <span className="material-symbols-outlined text-[18px]">forum</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100 leading-tight">
              Daftar Diskusi
            </h2>
            <p className="text-xs text-slate-400">
              Thread &amp; Pembahasan Terbaru
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3" id="thread-feed-list">
        {thread.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))}
      </div>

      <div className="flex items-center justify-between bg-[#131b2e] rounded-xl p-4 shadow-md border border-[#232f48]">
        <span className="text-xs text-slate-400">
          Menampilkan {thread.length} dari {thread.length} diskusi
        </span>
        <div className="flex items-center gap-2">
          <button
            className="px-4 py-1.5 rounded-lg bg-[#1e293b] border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-slate-100 text-xs font-semibold transition-colors disabled:opacity-40 disabled:hover:bg-[#1e293b] disabled:hover:text-slate-400 cursor-pointer disabled:cursor-not-allowed"
            disabled
          >
            Sebelumnya
          </button>
          <button className="px-4 py-1.5 rounded-lg bg-[#6366f1] hover:bg-[#4f46e5] text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer">
            Berikutnya
          </button>
        </div>
      </div>
    </div>
  );
}
