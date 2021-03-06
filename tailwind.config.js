module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.scss'],
  theme: {
    extend: {
      colors: {
        ureed: '#E5E5E5',
        gray100: '#e5e5e7',
        gray200: '#BFC4CA',
        grayA0:'#A0AEC0',
      },
      fontSize: {
        '2xs': '.7rem',
      },
      spacing: {
        13: '3.25rem',
        14: '3.5rem',
        18: '4.5rem',
        22: '5.5rem',
        60: '15rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
        97: '25rem',
        108: '27rem',
        120: '30rem',
        132: '33rem',
        144: '36rem',
        156: '39rem',
        168: '42rem',
        180: '45rem',
        192: '48rem',
        204: '51rem',
        216: '54rem',
        228: '57rem',
        234: '58.5rem',
        240: '60rem',
      },
      width: {
        14: '3.5rem',
        66: 'max-content',
        96: '24rem',
        132: '33rem',
        fit: 'fit-content',
        68: '17.188rem',
      },
      minWidth: {
        72: '18.1255rem',
        74: '25rem',
      },
      maxWidth: {
        70: '16rem',
      },
      height: {
        14: '3.5rem',
      },
      boxShadow: {
        xl3: '0px 1px 3px rgba(0, 0, 0, 0.102)',
        base: '0px 0px 16px rgba(0, 0, 0, 0.25)',
      },
      maxHeight: {
        72: '18rem',
        8: '8rem',
      },
      inset: {
        r4: '1rem',
        l4: '1rem',
      },
      rotate: {
        '-270': '-270deg',
        270: '270deg',
        360: '360deg',
      },
    },
    stroke: theme => ({
      gray: theme('colors.gray.500'),
    }),
  },
  variants: {
    textColor: ['focus-within', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    fill: ['responsive', 'hover', 'focus'],
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
    inset: ['responsive', 'direction'],
    space: ['responsive', 'direction'],
    transform: ['responsive', 'direction', 'hover', 'group-hover'],
    rotate: ['responsive', 'direction'],
    transformOrigin: ['responsive', 'direction'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('tailwindcss-dir')()],
};
