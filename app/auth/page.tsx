import { LockKeyhole, ShieldCheck, UserPlus } from 'lucide-react';
import { roles } from '@/lib/auth/roles';

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur">
          <ShieldCheck className="h-12 w-12 text-cyber" aria-hidden="true" />
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Secure access for every cybercrime workflow.</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Module 1 establishes email/password authentication, JWT session responses, and role-based foundations for citizens,
            investigators, and administrators.
          </p>
          <div className="mt-8 grid gap-4">
            {roles.map((role) => (
              <article key={role.value} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                <h2 className="text-xl font-bold">{role.label}</h2>
                <p className="mt-2 text-sm text-slate-300">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-8 text-ink shadow-glow">
          <div className="flex items-center gap-3">
            <UserPlus className="text-trust" aria-hidden="true" />
            <h2 className="text-3xl font-black">Create an account</h2>
          </div>
          <form className="mt-8 grid gap-5" aria-describedby="auth-api-note">
            <label className="grid gap-2 font-semibold">Full name<input className="rounded-2xl border border-slate-300 px-4 py-3" name="fullName" autoComplete="name" minLength={2} required /></label>
            <label className="grid gap-2 font-semibold">Email<input className="rounded-2xl border border-slate-300 px-4 py-3" name="email" type="email" autoComplete="email" required /></label>
            <label className="grid gap-2 font-semibold">Password<input className="rounded-2xl border border-slate-300 px-4 py-3" name="password" type="password" autoComplete="new-password" minLength={12} required /></label>
            <button className="focus-ring rounded-full bg-trust px-6 py-4 font-bold text-white" type="button">Connect to API registration</button>
          </form>
          <p id="auth-api-note" className="mt-5 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600">
            Frontend wiring is intentionally paused for review; the FastAPI endpoints are available at <code>/api/v1/auth/register</code> and <code>/api/v1/auth/login</code>.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-600"><LockKeyhole size={16} aria-hidden="true" /> JWT-ready, bcrypt-hashed passwords, and OpenAPI documented.</div>
        </div>
      </section>
    </main>
  );
}
