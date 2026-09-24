import { useState } from 'react';

export default function ThreadInput({ onAddThread }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    if (onAddThread) {
      onAddThread({
        title: title.trim(),
        body: body.trim(),
      });
    }

    setTitle('');
    setBody('');
  };

  return (
    <div className="bg-[#131b2e] rounded-xl p-4 sm:p-5 shadow-lg border border-[#232f48] flex flex-col gap-3">
      <div className="flex items-center justify-between pb-3 border-b border-[#1e293b]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366f1]/20 text-[#818cf8] flex items-center justify-center border border-[#6366f1]/30">
            <span className="material-symbols-outlined text-[18px]">edit_note</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">
              Buat Thread Baru
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Tanyakan masalah atau diskusikan topik teknologi bersama komunitas
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <div className="flex flex-col gap-1.5">
          <label
            className="text-xs font-semibold text-slate-200"
            htmlFor="inline-thread-title"
          >
            Judul Thread <span className="text-red-400">*</span>
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-[#0a101f] text-slate-100 placeholder:text-slate-500 border border-[#2a3854] text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
            id="inline-thread-title"
            placeholder="Tuliskan judul diskusi yang jelas dan menarik..."
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            className="text-xs font-semibold text-slate-200"
            htmlFor="inline-thread-body"
          >
            Isi Thread / Diskusi <span className="text-red-400">*</span>
          </label>
          <textarea
            className="w-full p-4 rounded-lg bg-[#0a101f] text-slate-100 placeholder:text-slate-500 border border-[#2a3854] text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all resize-none"
            id="inline-thread-body"
            placeholder="Tuliskan detail pertanyaan atau topik pembahasan secara lengkap..."
            required
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#1e293b]">
          <button
            className="px-5 py-2 rounded-lg bg-[#6366f1] hover:bg-[#4f46e5] text-white text-xs font-semibold shadow-md transition-all inline-flex items-center gap-1.5 cursor-pointer"
            type="submit"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>Publikasikan Thread</span>
          </button>
        </div>
      </form>
    </div>
  );
}
