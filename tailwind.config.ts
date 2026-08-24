import type { Config } from 'tailwindcss';
const config: Config = { darkMode: 'class', content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#07111f', cyber: '#00d4ff', saffron: '#ff9f1c', trust: '#2454ff', mint: '#00c48c' }, boxShadow: { glow: '0 24px 80px rgba(0, 99, 255, .22)' }, fontFamily: { sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'] } } }, plugins: [] };
export default config;
