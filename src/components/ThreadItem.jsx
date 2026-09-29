import { Link } from 'react-router-dom';
import { postedAt } from '../utils';

export default function ThreadItem({
  id,
  createdAt,
  owner,
  body,
  title,
  totalComments,
}) {
  return (
    <article className="bg-[#131b2e] rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl hover:border-[#384869] transition-all duration-200 border border-[#232f48] flex flex-col gap-3 group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            alt={owner.name}
            className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-600"
            src={owner.avatar}
          />

          <span className="text-xs font-semibold text-slate-100">
            {owner.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <span className="material-symbols-outlined text-[16px]">
              schedule
            </span>
            <span>{postedAt(createdAt)}</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-[#818cf8] transition-colors cursor-pointer leading-snug">
          <Link to={`/threads/${id}`}>{title}</Link>
        </h2>
        <p className="text-sm text-slate-300 mt-1 line-clamp-2 leading-relaxed">
          {body}
        </p>
      </div>

      <div className="flex items-center pt-3 border-t border-[#1e293b] text-slate-400">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 select-none">
          <span className="material-symbols-outlined text-[18px]">
            chat_bubble
          </span>
          <span>{totalComments ?? 0} Komentar</span>
        </div>
      </div>
    </article>
  );
}
