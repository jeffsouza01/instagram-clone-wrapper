const root = document.documentElement;

const themes = {
    light: {
        background: '#ffffffff',
        text: 'black'
    },
    dark: {
        background: '#090f31',
        text: '#ffffff'
    }
};


const theme = localStorage.getItem('theme');
if( theme ) {
    setTheme(theme)
}

const darkMode = document.querySelector('input[name=theme]');
darkMode.addEventListener('change', ({target}) => {
    setTheme(target.checked ? 'dark' : 'light');
})


function setTheme(newTheme) {
    const colorTheme = themes[newTheme];

    Object.keys(colorTheme).map((key) => {
        root.style.setProperty(`--${key}`, colorTheme[key]);
    })

    localStorage.setItem('theme', newTheme);
}