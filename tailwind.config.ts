
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
				// Dark Cyber Luxe Neon Color System
				cyber: {
					'electric-purple': '#a855f7',
					'rose-flash': '#f43f5e',
					'indigo-glow': '#4f46e5',
					'neon-cyan': '#00ffe0',
					'soft-white': '#e5e7eb',
					'deep-dark': '#0d0d0d',
					'glass-panel': 'rgba(255, 255, 255, 0.08)'
				}
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
				'animated-gradient': 'linear-gradient(45deg, #a855f7, #4f46e5, #f43f5e)',
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
				'neon-glow': {
					'0%, 100%': {
						textShadow: '0 0 15px #a855f7, 0 0 25px #a855f7, 0 0 35px #a855f7'
					},
					'50%': {
						textShadow: '0 0 20px #4f46e5, 0 0 30px #4f46e5, 0 0 40px #4f46e5'
					}
				},
				'cyber-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'25%': {
						transform: 'translateY(-8px) translateX(4px)'
					},
					'50%': {
						transform: 'translateY(-4px) translateX(-2px)'
					},
					'75%': {
						transform: 'translateY(-10px) translateX(3px)'
					}
				},
				'flicker-pulse': {
					'0%, 100%': {
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': {
						opacity: '0.8',
						filter: 'brightness(1.2)'
					}
				},
				'ripple-effect': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(4)',
						opacity: '0'
					}
				},
				'section-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)',
						filter: 'blur(4px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
						filter: 'blur(0)'
					}
				},
				'gradient-shift': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-glow': 'neon-glow 3s ease-in-out infinite',
				'cyber-float': 'cyber-float 6s ease-in-out infinite',
				'flicker-pulse': 'flicker-pulse 0.3s ease-in-out',
				'ripple-effect': 'ripple-effect 0.6s ease-out',
				'section-reveal': 'section-reveal 0.8s ease-out',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite'
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
