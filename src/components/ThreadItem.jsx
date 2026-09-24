export default function ThreadItem({ thread }) {
  return (
    <article className="bg-[#131b2e] rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl hover:border-[#384869] transition-all duration-200 border border-[#232f48] flex flex-col gap-3 group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {thread.avatar ? (
            <img
              alt={thread.author}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-600"
              src={thread.avatar}
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-sky-700 text-sky-100 flex items-center justify-center text-xs font-bold ring-1 ring-sky-500/40">
              {thread.authorInitials || thread.author.slice(0, 2).toUpperCase()}
            </div>
          )}
          <span className="text-xs font-semibold text-slate-100">
            {thread.author}
          </span>
          {thread.isAuthor && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#6366f1]/20 text-[#818cf8] border border-[#6366f1]/30 text-[10px] font-bold tracking-wide">
              Author
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {thread.isNew && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-900/40 text-sky-400 border border-sky-600/30 text-[11px] font-bold">
              Baru
            </span>
          )}
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>{thread.timeAgo}</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-[#818cf8] transition-colors cursor-pointer leading-snug">
          <a href="#">{thread.title}</a>
        </h2>
        <p className="text-sm text-slate-300 mt-1 line-clamp-2 leading-relaxed">
          {thread.body}
        </p>
      </div>

      <div className="flex items-center pt-3 border-t border-[#1e293b] text-slate-400">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 select-none">
          <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
          <span>{thread.commentsCount ?? 0} Komentar</span>
        </div>
      </div>
    </article>
  );
}
