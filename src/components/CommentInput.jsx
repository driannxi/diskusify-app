import { useState } from 'react';

export default function CommentInput({ onAddComment }) {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    if (onAddComment) {
      onAddComment(commentText.trim());
    }

    setCommentText('');
  };

  return (
    <section className="bg-[#131b2e] rounded-xl border border-[#232f48] shadow-lg p-6 flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-slate-100">Tulis Komentar</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="w-full p-4 rounded-lg bg-[#0a101f] text-slate-100 placeholder:text-slate-500 text-sm border border-[#2a3854] focus:outline-none focus:ring-2 focus:ring-[#818cf8] focus:border-transparent transition-all resize-y min-h-[120px]"
          placeholder="Tulis komentar atau tanggapan Anda..."
          required
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="inline-flex items-center gap-1.5 px-6 py-2 rounded-lg bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer active:scale-[0.98]"
            type="submit"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>Kirim Komentar</span>
          </button>
        </div>
      </form>
    </section>
  );
}
