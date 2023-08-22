/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: [ 
      "./layout/*.liquid ", // Notice that there are spaces after the liquid?
      "./sections/*.liquid", 
      "./snippets/*.liquid", 
      "./templates/customers/*.liquid", 
      "./templates/*.liquid", 
  ],
  theme: {
      extend: {},
  },
  plugins: [],
}
