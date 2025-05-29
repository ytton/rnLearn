const { hairlineWidth, } = require('nativewind/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontSize: {
        'xs': ['var(--fs-xs)', { lineHeight: 'var(--lh-xs)' }],
        "sm": ["var(--fs-sm)", { lineHeight: "var(--lh-sm)" }],
        "base": ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
        "lg": ["var(--fs-lg)", { lineHeight: "var(--lh-lg)" }],
        "xl": ["var(--fs-xl)", { lineHeight: "var(--lh-xl)" }],
        "2xl": ["var(--fs-2xl)", { lineHeight: "var(--lh-2xl)" }],
        "3xl": ["var(--fs-3xl)", { lineHeight: "var(--lh-3xl)" }],
        "4xl": ["var(--fs-4xl)", { lineHeight: "var(--lh-4xl)" }],
        "5xl": ["var(--fs-5xl)", { lineHeight: "var(--lh-5xl)" }],
        "6xl": ["var(--fs-6xl)", { lineHeight: "var(--lh-6xl)" }],
      },
      spacing: {
        // scale() 函数 - 只需要定义缩放因子
        's-1': 'calc(var(--scale-factor, 1) * 1px)',
        's-2': 'calc(var(--scale-factor, 1) * 2px)',
        's-4': 'calc(var(--scale-factor, 1) * 4px)',
        's-6': 'calc(var(--scale-factor, 1) * 6px)',
        's-8': 'calc(var(--scale-factor, 1) * 8px)',
        's-10': 'calc(var(--scale-factor, 1) * 10px)',
        's-12': 'calc(var(--scale-factor, 1) * 12px)',
        's-14': 'calc(var(--scale-factor, 1) * 14px)',
        's-16': 'calc(var(--scale-factor, 1) * 16px)',
        's-18': 'calc(var(--scale-factor, 1) * 18px)',
        's-20': 'calc(var(--scale-factor, 1) * 20px)',
        's-24': 'calc(var(--scale-factor, 1) * 24px)',
        's-28': 'calc(var(--scale-factor, 1) * 28px)',
        's-32': 'calc(var(--scale-factor, 1) * 32px)',
        's-36': 'calc(var(--scale-factor, 1) * 36px)',
        's-40': 'calc(var(--scale-factor, 1) * 40px)',
        's-44': 'calc(var(--scale-factor, 1) * 44px)',
        's-48': 'calc(var(--scale-factor, 1) * 48px)',
        's-56': 'calc(var(--scale-factor, 1) * 56px)',
        's-64': 'calc(var(--scale-factor, 1) * 64px)',
        's-72': 'calc(var(--scale-factor, 1) * 72px)',
        's-80': 'calc(var(--scale-factor, 1) * 80px)',
        's-96': 'calc(var(--scale-factor, 1) * 96px)',
        's-100': 'calc(var(--scale-factor, 1) * 100px)',
        's-112': 'calc(var(--scale-factor, 1) * 112px)',
        's-128': 'calc(var(--scale-factor, 1) * 128px)',
        's-160': 'calc(var(--scale-factor, 1) * 160px)',
        's-200': 'calc(var(--scale-factor, 1) * 200px)',
        's-250': 'calc(var(--scale-factor, 1) * 250px)',
        's-300': 'calc(var(--scale-factor, 1) * 300px)',
        's-320': 'calc(var(--scale-factor, 1) * 320px)',
        's-350': 'calc(var(--scale-factor, 1) * 350px)',
        's-375': 'calc(var(--scale-factor, 1) * 375px)',

        // verticalScale() 函数
        'vs-1': 'calc(var(--vertical-scale-factor, 1) * 1px)',
        'vs-2': 'calc(var(--vertical-scale-factor, 1) * 2px)',
        'vs-4': 'calc(var(--vertical-scale-factor, 1) * 4px)',
        'vs-8': 'calc(var(--vertical-scale-factor, 1) * 8px)',
        'vs-12': 'calc(var(--vertical-scale-factor, 1) * 12px)',
        'vs-16': 'calc(var(--vertical-scale-factor, 1) * 16px)',
        'vs-20': 'calc(var(--vertical-scale-factor, 1) * 20px)',
        'vs-24': 'calc(var(--vertical-scale-factor, 1) * 24px)',
        'vs-32': 'calc(var(--vertical-scale-factor, 1) * 32px)',
        'vs-40': 'calc(var(--vertical-scale-factor, 1) * 40px)',
        'vs-48': 'calc(var(--vertical-scale-factor, 1) * 48px)',
        'vs-64': 'calc(var(--vertical-scale-factor, 1) * 64px)',
        'vs-80': 'calc(var(--vertical-scale-factor, 1) * 80px)',
        'vs-100': 'calc(var(--vertical-scale-factor, 1) * 100px)',
        'vs-150': 'calc(var(--vertical-scale-factor, 1) * 150px)',
        'vs-200': 'calc(var(--vertical-scale-factor, 1) * 200px)',
        'vs-250': 'calc(var(--vertical-scale-factor, 1) * 250px)',
        'vs-300': 'calc(var(--vertical-scale-factor, 1) * 300px)',
        'vs-400': 'calc(var(--vertical-scale-factor, 1) * 400px)',
        'vs-500': 'calc(var(--vertical-scale-factor, 1) * 500px)',
        'vs-568': 'calc(var(--vertical-scale-factor, 1) * 568px)',
        'vs-667': 'calc(var(--vertical-scale-factor, 1) * 667px)',
      },
    }
  },
  plugins: [
    function ({ addUtilities, matchUtilities }) {
      // 更简洁的 API
      matchUtilities(
        {
          // s() 函数的替代
          'w-s': (value) => ({ width: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'h-s': (value) => ({ height: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'p-s': (value) => ({ padding: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'pt-s': (value) => ({ paddingTop: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'pb-s': (value) => ({ paddingBottom: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'pl-s': (value) => ({ paddingLeft: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'pr-s': (value) => ({ paddingRight: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'py-s': (value) => ({
            paddingTop: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)`,
            paddingBottom: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)`
          }),
          'px-s': (value) => ({
            paddingLeft: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)`,
            paddingRight: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)`
          }),
          'm-s': (value) => ({ margin: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'mt-s': (value) => ({ marginTop: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'mb-s': (value) => ({ marginBottom: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'ml-s': (value) => ({ marginLeft: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'mr-s': (value) => ({ marginRight: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)` }),
          'my-s': (value) => ({
            marginTop: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)`,
            marginBottom: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)`
          }),
          'mx-s': (value) => ({
            marginLeft: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)`,
            marginRight: `calc(var(--scale-factor, 1) * ${parseFloat(value)}px)`
          }),

          // vs() 函数的替代
          'w-vs': (value) => ({ width: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'h-vs': (value) => ({ height: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'p-vs': (value) => ({ padding: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'pt-vs': (value) => ({ paddingTop: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'pb-vs': (value) => ({ paddingBottom: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'pl-vs': (value) => ({ paddingLeft: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'pr-vs': (value) => ({ paddingRight: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'py-vs': (value) => ({
            paddingTop: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)`,
            paddingBottom: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)`
          }),
          'px-vs': (value) => ({
            paddingLeft: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)`,
            paddingRight: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)`
          }),
          'm-vs': (value) => ({ margin: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'mt-vs': (value) => ({ marginTop: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'mb-vs': (value) => ({ marginBottom: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'ml-vs': (value) => ({ marginLeft: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'mr-vs': (value) => ({ marginRight: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)` }),
          'my-vs': (value) => ({
            marginTop: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)`,
            marginBottom: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)`
          }),
          'mx-vs': (value) => ({
            marginLeft: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)`,
            marginRight: `calc(var(--vertical-scale-factor, 1) * ${parseFloat(value)}px)`
          }),
        },
        { type: ['length', 'number'] }
      );
    },
    require('tailwindcss-animate')
  ],
};
