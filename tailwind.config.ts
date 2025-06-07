
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Magic UI Color System
				'magic-dark': '#0d0d0d',
				'magic-dark-secondary': '#1a1a1a',
				'magic-white': '#ffffff',
				'magic-light-gray': '#d1d1d1',
				'magic-gray': '#b0b0b0',
				'magic-golden': '#ffd700',
				'magic-cyan': '#00ffe7',
				'magic-glass': 'rgba(26, 26, 26, 0.7)',
				'magic-border': 'rgba(255, 255, 255, 0.1)',
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'magic-glow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'magic-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'25%': {
						transform: 'translateY(-10px) translateX(5px)'
					},
					'50%': {
						transform: 'translateY(-5px) translateX(-3px)'
					},
					'75%': {
						transform: 'translateY(-12px) translateX(2px)'
					}
				},
				'magic-float-alt': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'25%': {
						transform: 'translateY(-8px) translateX(-4px)'
					},
					'50%': {
						transform: 'translateY(-15px) translateX(6px)'
					},
					'75%': {
						transform: 'translateY(-6px) translateX(-2px)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'magic-glow': 'magic-glow 20s ease-in-out infinite',
				'magic-float': 'magic-float 6s ease-in-out infinite',
				'magic-float-alt': 'magic-float-alt 7s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
			},
			backdropBlur: {
				'xs': '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
