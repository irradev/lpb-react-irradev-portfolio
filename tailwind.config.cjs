/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
      extend: {
         screens: {
            mxs: { max: '320px' },
            mssm: { max: '460px' },
         },
      },
   },
   plugins: [],
};
