export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx}"], 
  theme: {
  	extend: {
  		fontSize: {
  			xxs: [
  				'0.65rem',
  				{
  					lineHeight: '0.90rem'
  				}
  			],
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1rem'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.25rem'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.5rem'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '2rem'
  				}
  			],
  			'3xl': [
  				'1.875rem',
  				{
  					lineHeight: '2.25rem'
  				}
  			],
  			'4xl': [
  				'2.25rem',
  				{
  					lineHeight: '2.5rem'
  				}
  			],
  			'5xl': [
  				'3rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'7xl': [
  				'4.5rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'8xl': [
  				'6rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'9xl': [
  				'8rem',
  				{
  					lineHeight: '1'
  				}
  			]
  		},
  		fontWeight: {
  			regular: 400,
  			semibold: 600,
  			bold: 700,
  			light: 300
  		},
  		fontFamily: {
  			sans: [
  				'DM Sans',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primaryOrange: {
  				'10': '#FEEDE9',
  				'100': '#F25F27'
  			},
  			primaryGreen: {
  				'10': '#E6ECEE',
  				'20': '#CCD9DC',
  				'100': '#024250'
  			},
  			dark: {
  				'30': '#C6C6C6',
  				'70': '#858585',
  				'100': '#404040'
  			},
  			border: 'hsl(var(--border))',
  			background: 'hsl(var(--background))',
  			semantic: {
  				success: '#27AE60',
  				error: '#EB5757',
  				warning: '#F2C94C',
  				yellow: '#DFAD16'
  			},
  			chips: {
  				yellow: '#FFEEB2',
  				blue: '#E9FDFE',
  				purple: '#F1E9FE'
  			},
  			blue: {
  				'70': '#E9FDFEB2',
  				'100': '#2D9CDB'
  			},
  			coffee: '#180A04',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			xxss: '2px',
  			xs: '4px',
  			sm: '8px',
  			base: '12px',
  			lg: '16px',
  			xl: '20px',
  			'2xl': '24px',
  			'3xl': '32px',
  			'4xl': '40px',
  			'5xl': '48px',
  			'6xl': '60px',
  			'7xl': '80px',
  			'8xl': '100px',
  			'9xl': '130px'
  		},
  		borderRadius: {
  			lg: '0.5rem',
  			md: '0.25rem',
  			sm: '0.125rem'
  		},
  		boxShadow: {
  			'custom-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  		},
  		breakpoints: {},
  		screens: {
  			xs: {
  				max: '420px'
  			}
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "disabled"],
      textColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};