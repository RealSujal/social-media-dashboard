const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('colorMode', 'dark');
};

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
};

const setColorFromLocalStorage = () => {
    return localStorage.getItem('colorMode');
};

const setColorModeFromPreferences = () => {
    window.matchMedia('(preferes-color-scheme: dark)').matches ? 'dark' : 'light';
};

const loadAndUpdateColor = () => {
    const color = setColorFromLocalStorage() || setColorModeFromPreferences()
    color == 'dark' ? darkButton.click() : lightButton.click();
};

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        darkButton.checked ? setDarkMode() : setLightMode();
    });
});

window.matchMedia('(preferes-color-scheme: dark)')
    .addEventListener('change', (event) => {
        event.matches ? darkButton.click() : lightButton.click();
    })


loadAndUpdateColor();