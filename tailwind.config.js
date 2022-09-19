module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')"
      },
      spacing:{
        '0.1':'0.063rem',
      },
      colors:{
        'primarypurp':'#5d3ebc',
        'secondrypurp':'#7849f7',
        'primaryyellow':'#ffd300'
      },
    },
  },
  plugins: [],
}