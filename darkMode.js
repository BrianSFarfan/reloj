const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const darkMode = document.getElementById('darkMode');


const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

darkMode.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
    console.log(switchToTheme);
    darkMode.classList.toggle("activeDM");


});

setTheme(localStorage.getItem('theme') || preferedColorScheme);