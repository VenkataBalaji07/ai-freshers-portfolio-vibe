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
				// Enhanced Magic UI Color System
				'magic-dark': '#0d0d0d',
				'magic-dark-secondary': '#1a1a1a',
				'magic-white': '#ffffff',
				'magic-light-gray': '#d1d1d1',
				'magic-gray': '#b0b0b0',
				'magic-golden': '#ffd700',
				'magic-cyan': '#00ffe7',
				'magic-glass': 'rgba(26, 26, 26, 0.8)',
				'magic-border': 'rgba(255, 255, 255, 0.12)',
				'premium-purple': '#7b2cbf',
				'premium-purple-light': '#9c4dcc',
				'premium-purple-dark': '#5a1a7a',
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'sora': ['Sora', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
				// Enhanced Magic UI Animations
				'magic-glow': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05)'
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
				},
				'spin-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'skill-pulse': {
					'0%, 100%': {
						boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 0 12px rgba(255, 255, 255, 0.08), 0 20px 40px rgba(0, 0, 0, 0.6)'
					},
					'50%': {
						boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.15), 0 25px 50px rgba(0, 0, 0, 0.7), 0 0 30px var(--skill-color, #ffd700)'
					}
				},
				'shimmer': {
					'0%': {
						left: '-100%'
					},
					'100%': {
						left: '100%'
					}
				},
				'ripple': {
					'0%': {
						width: '0',
						height: '0',
						opacity: '0.8'
					},
					'100%': {
						width: '200px',
						height: '200px',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'magic-glow': 'magic-glow 25s ease-in-out infinite',
				'magic-float': 'magic-float 6s ease-in-out infinite',
				'magic-float-alt': 'magic-float-alt 7s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'spin-slow': 'spin-slow 30s linear infinite',
				'skill-pulse': 'skill-pulse 0.6s ease-out',
				'shimmer': 'shimmer 0.6s ease',
				'ripple': 'ripple 0.6s ease',
			},
			backdropBlur: {
				'xs': '2px',
			},
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'smooth': 'cubic-bezier(0.19, 1, 0.22, 1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
