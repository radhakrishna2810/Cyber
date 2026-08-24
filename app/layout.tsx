import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'National Cyber Crime Reporting Portal — Reimagined', description: 'AI-powered, accessible cybercrime reporting ecosystem for citizens and officers.', manifest: '/manifest.json' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
