/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
      extend: {
         screens: {
            mxs: { max: '320px' },
            mssm: { max: '460px' },
            'long-vertical': {
               raw: '(min-device-height: 1100px)',
            },
         },
         height: {
            'screen-80': '80vh',
            'screen-60': '60vh',
         },
      },
   },
   plugins: [],
};
