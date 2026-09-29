import { postedAt } from '../utils';

export default function CommentItem({ owner, createdAt, content }) {
  return (
    <article className="bg-[#131b2e] rounded-xl border border-[#232f48] shadow-md p-6 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {owner.avatar ? (
            <img
              alt={owner.name}
              className="w-10 h-10 rounded-full object-cover ring-1 ring-[#232f48]"
              src={owner.avatar}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-sky-700 text-sky-100 flex items-center justify-center text-xs font-bold ring-1 ring-sky-500/40">
              {owner.name?.slice(0, 2).toUpperCase() || 'U'}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-100">
              {owner.name}
            </span>
            <span className="text-xs text-slate-400">
              {postedAt(createdAt)}
            </span>
          </div>
        </div>
      </div>

      <div className="text-slate-300 text-sm leading-relaxed">
        <p>{content}</p>
      </div>
    </article>
  );
}
