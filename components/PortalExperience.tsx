'use client';

import {
  aiFeatures,
  assistantFindings,
  commandCenters,
  flows,
  pages,
  reportingSteps,
  timelineStates,
  tokens,
} from '@/lib/portal-data';
import { AlertTriangle, Bot, CheckCircle2, ChevronRight, Globe2, Lock, Moon, Search, Shield, Sparkles } from 'lucide-react';

const navItems = ['Report', 'Track', 'Knowledge', 'Dashboards', 'Design System'];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/70 px-3 py-1 text-xs font-semibold text-ink shadow-sm dark:bg-white/10 dark:text-white">
      {children}
    </span>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`glass rounded-[2rem] p-6 shadow-glow ${className}`}>{children}</section>;
}

export default function PortalExperience() {
  return (
    <main className="min-h-screen overflow-hidden font-sans">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-ink/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a className="focus-ring flex items-center gap-3 rounded-xl" href="#top" aria-label="National Cyber Crime Portal home">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-cyber shadow-glow">
              <Shield aria-hidden="true" />
            </span>
            <span>
              <b>Cyber Crime Portal</b>
              <small className="block text-slate-500 dark:text-slate-300">Government of India • AI Safe Reporting</small>
            </span>
          </a>

          <nav className="hidden gap-2 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="focus-ring rounded-full bg-ink px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-ink">
            <span className="inline-flex items-center gap-2">
              <Moon size={16} aria-hidden="true" /> AAA
            </span>
          </button>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>AI-first</Badge>
            <Badge>WCAG AAA</Badge>
            <Badge>Mobile-first</Badge>
            <Badge>Enterprise-grade</Badge>
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-[-.06em] text-ink dark:text-white md:text-7xl">
            A calmer, faster and safer way to report cyber crime.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300">
            A complete reimagining of the National Cyber Crime Reporting Portal into a trustworthy AI-powered ecosystem for
            citizens, police, banks, administrators and investigation teams.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#report" className="focus-ring group rounded-full bg-trust px-6 py-4 text-center font-bold text-white shadow-glow">
              Start guided report <ChevronRight className="inline transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#dashboards" className="focus-ring rounded-full border border-slate-300 bg-white px-6 py-4 text-center font-bold dark:border-white/15 dark:bg-white/10">
              View command center
            </a>
          </div>
        </div>

        <Card className="relative">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyber/30 blur-3xl" />
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black">AI complaint assistant</h2>
            <Bot className="text-trust" aria-hidden="true" />
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-ink p-5 text-white">
              <p className="text-sm text-cyber">Smart triage</p>
              <p className="mt-2 text-2xl font-bold">“I lost money after clicking a payment link.”</p>
            </div>
            {assistantFindings.map((finding, index) => (
              <div key={finding} className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 dark:bg-white/10">
                <CheckCircle2 className="text-mint" aria-hidden="true" />
                <span className="font-medium">
                  {index + 1}. {finding}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section id="report" className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <h2 className="text-4xl font-black tracking-tight">Guided reporting wizard</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Progressive disclosure, autosave, inline validation, AI autofill, OTP/passkey verification and accessible help at every step.
            </p>
            <div className="mt-6 grid grid-auto gap-4">
              {reportingSteps.map((step, index) => (
                <div key={step} className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                  <b className="text-trust">0{index + 1}</b>
                  <h3 className="mt-2 text-xl font-bold">{step}</h3>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <AlertTriangle className="text-saffron" aria-hidden="true" />
            <h3 className="mt-4 text-2xl font-black">Emergency help</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Prominent financial fraud freeze flow, women/child safety priority route and contextual helplines.
            </p>
          </Card>
        </div>
      </section>

      <section id="track" className="mx-auto max-w-7xl px-4 py-10">
        <Card>
          <h2 className="text-4xl font-black">Citizen case timeline</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {timelineStates.map((state) => (
              <div key={state} className="relative rounded-3xl bg-gradient-to-br from-white to-slate-50 p-5 dark:from-white/10 dark:to-white/5">
                <Sparkles className="text-cyber" aria-hidden="true" />
                <h3 className="mt-10 font-bold">{state}</h3>
                <p className="text-sm text-slate-500">Transparent status, documents, notifications and next actions.</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section id="knowledge" className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-2">
        <Card>
          <Search className="text-trust" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-black">AI knowledge search</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Semantic FAQ, cyber safety tips, campaigns, alerts, news, downloads and multilingual plain-language guidance.
          </p>
        </Card>
        <Card>
          <Globe2 className="text-mint" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-black">Inclusive by default</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Large text, high contrast, reduced motion, screen reader landmarks, keyboard shortcuts and regional language support.
          </p>
        </Card>
      </section>

      <section id="dashboards" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="mb-6 text-4xl font-black">Role-based command centers</h2>
        <div className="grid grid-auto gap-5">
          {commandCenters.map(({ name, Icon, description }) => (
            <Card key={name}>
              <Icon className="text-trust" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-black">{name}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="design-system" className="mx-auto max-w-7xl px-4 py-10">
        <Card>
          <h2 className="text-4xl font-black">Design system + complete IA</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div>
              <h3 className="font-black">Tokens</h3>
              {Object.entries(tokens).map(([name, values]) => (
                <p key={name} className="mt-2 text-sm">
                  <b>{name}:</b> {values.join(', ')}
                </p>
              ))}
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-black">Preserved and improved pages</h3>
              <div className="mt-3 flex max-h-72 flex-wrap gap-2 overflow-auto rounded-3xl bg-slate-50 p-4 dark:bg-white/5">
                {pages.map((page) => (
                  <Badge key={page}>{page}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="mb-6 text-4xl font-black">AI feature architecture</h2>
        <div className="grid grid-auto gap-3">
          {aiFeatures.map((feature) => (
            <div key={feature} className="rounded-2xl border border-slate-200 bg-white p-4 font-semibold dark:border-white/10 dark:bg-white/5">
              <Sparkles className="mr-2 inline text-cyber" size={18} aria-hidden="true" />
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <Card>
          <h2 className="text-4xl font-black">Research-backed user flows</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {flows.map((flow) => (
              <div key={flow.name}>
                <h3 className="text-xl font-black">{flow.name}</h3>
                <ol className="mt-3 space-y-2">
                  {flow.steps.map((step) => (
                    <li key={step} className="rounded-2xl bg-white/70 p-3 text-sm dark:bg-white/10">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <footer className="mt-10 border-t border-slate-200 px-4 py-10 text-center text-sm text-slate-500 dark:border-white/10">
        Production-ready Next.js frontend foundation with AI-first UX, secure architecture guidance, PWA readiness and Figma-ready tokens.
        <Lock className="ml-1 inline" size={14} aria-hidden="true" />
      </footer>
    </main>
  );
}
