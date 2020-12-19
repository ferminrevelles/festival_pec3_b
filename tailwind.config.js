module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '90%': '90%',
        '45%': '45%',
        '32%': '32%',
      },
      height: {
        '108': '28rem',
      },
      fontFamily: {
        'pangolin' : ['"Pangolin", cursive, sans-serif'],
      },
      textColor: {
        'yellow-link': '#FF0',
        'red-1': '#f00',
        'form': '#FFA500',
      },
      backgroundColor: {
        'title-footer': '#C2CD5A',
        'ticket': '#A03A2D',
        'link-footer': '#4E2C29',
        'web': '#5c5555',
        'titles-pages': '#FFA500',
        'flex-group': '#8F308F',
        'activ-nav': '#BB3922',
        'btn-form': '#28a745',
      },
      borderColor: {
        'form': '#FFA500',
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
  purge: ["./src/**/*.html","./src/*.html"],
}
