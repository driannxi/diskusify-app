import { useState } from 'react';
import { postedAt } from '../utils';

export default function DetailThread({ title, owner, createdAt, body }) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <article className="bg-[#131b2e] rounded-xl border border-[#232f48] shadow-lg p-6 md:p-8 flex flex-col gap-6">
      <h1 className="text-2xl md:text-3xl text-slate-100 font-bold tracking-tight leading-snug">
        {title}
      </h1>

      <div className="flex items-center gap-4 pb-4 border-b border-[#232f48]">
        <img
          alt={owner.name}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-[#232f48]"
          src={owner.avatar}
        />

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-100">
            {owner.name}
          </span>
          <span className="text-xs text-slate-400">{postedAt(createdAt)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-slate-300 text-sm md:text-base leading-relaxed">
        <p>{body}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[#232f48]">
        <div className="flex items-center gap-2">
          <button
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors text-xs font-medium cursor-pointer ${
              bookmarked
                ? 'bg-[#6366f1]/20 text-[#818cf8] border-[#6366f1]'
                : 'bg-[#0a101f] text-slate-400 hover:text-slate-100 hover:bg-[#1e293b] border-[#232f48]'
            }`}
            type="button"
            onClick={() => setBookmarked(!bookmarked)}
          >
            <span className="material-symbols-outlined text-[18px]">
              {bookmarked ? 'bookmark_added' : 'bookmark'}
            </span>
            <span>{bookmarked ? 'Tersimpan' : 'Simpan'}</span>
          </button>
          <button
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a101f] text-slate-400 hover:text-[#818cf8] hover:bg-[#1e293b] border border-[#232f48] transition-colors text-xs font-medium cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">share</span>
            <span>Bagikan</span>
          </button>
        </div>
      </div>
    </article>
  );
}
