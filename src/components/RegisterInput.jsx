import { useState } from "react";

function RegisterInput({onRegister}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password) return;

    if (onRegister) {
      onRegister({ name: name.trim(), email: email.trim(), password });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* Input Nama Lengkap */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-xs font-semibold text-slate-200 flex items-center gap-1.5"
          htmlFor="reg-name"
        >
          <span className="material-symbols-outlined text-sm text-slate-400">
            badge
          </span>
          <span>Nama Lengkap</span>
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full bg-[#0d1527] border border-[#26334d] rounded-lg pl-10 pr-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] placeholder:text-slate-500 transition"
            id="reg-name"
            placeholder="Masukkan nama lengkap Anda"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="material-symbols-outlined text-slate-500 text-lg absolute left-3 pointer-events-none">
            badge
          </span>
        </div>
      </div>

      {/* Input Email */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-xs font-semibold text-slate-200 flex items-center gap-1.5"
          htmlFor="reg-email"
        >
          <span className="material-symbols-outlined text-sm text-slate-400">
            mail
          </span>
          <span>Email</span>
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full bg-[#0d1527] border border-[#26334d] rounded-lg pl-10 pr-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] placeholder:text-slate-500 transition"
            id="reg-email"
            placeholder="nama@email.com"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="material-symbols-outlined text-slate-500 text-lg absolute left-3 pointer-events-none">
            mail
          </span>
        </div>
      </div>

      {/* Input Kata Sandi */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-xs font-semibold text-slate-200 flex items-center gap-1.5"
          htmlFor="reg-password"
        >
          <span className="material-symbols-outlined text-sm text-slate-400">
            lock
          </span>
          <span>Kata Sandi</span>
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full bg-[#0d1527] border border-[#26334d] rounded-lg pl-10 pr-11 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] placeholder:text-slate-500 transition"
            id="reg-password"
            minLength={8}
            placeholder="Buat kata sandi minimal 8 karakter"
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="material-symbols-outlined text-slate-500 text-lg absolute left-3 pointer-events-none">
            key
          </span>
          <button
            aria-label={
              showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
            }
            className="absolute right-3 p-1 text-slate-400 hover:text-slate-200 transition rounded-md flex items-center justify-center cursor-pointer"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span className="material-symbols-outlined text-lg">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
      </div>

      {/* Tombol Submit */}
      <button
        className="mt-2 w-full py-2.5 px-4 rounded-lg bg-[#6366f1] hover:bg-indigo-600 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
        type="submit"
      >
        <span>Daftar Akun Sekarang</span>
        <span className="material-symbols-outlined text-lg transition-transform">
          arrow_forward
        </span>
      </button>
    </form>
  );
}

export default RegisterInput;
