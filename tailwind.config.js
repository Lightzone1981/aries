/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ginora: "Ginora, serif",
      },
      colors: {
        'dark-theme': '#1D1D1D',
        'bar-dark-theme': '#232526',
        'light-theme': '#F4F4F4',
        'bar-light-theme': '#B8B8B8',
        'btn-dark-theme': '#99A9FF',
        'btn-hover-dark-theme': '#5CE4CF',
        'mark-dark-theme': '#5CE4CF',
        'btn-light-theme': '#30363A',
        'btn-hover-light-theme': '#99A9FF',
      },
      backgroundImage: {
        'menu': "url('../src/Assets/icons/menu.svg')",
        'spiral': "url('../src/Assets/patterns/pattern-big.png')",
        'spiral-colored': "url('../src/Assets/patterns/colored-pattern.png')",
        'scroll-arrow': "url('../src/Assets/icons/scroll-arrow.svg')",
        'arrow-right': "url('../src/Assets/icons/right-arrow.svg')",
        
      }
    }
  }
}
