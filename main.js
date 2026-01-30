
const numbersContainer = document.getElementById('numbers-container');
const generateButton = document.getElementById('generate-button');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getNumberColorClass(number) {
    if (number <= 10) return 'color-1';
    if (number <= 20) return 'color-2';
    if (number <= 30) return 'color-3';
    if (number <= 40) return 'color-4';
    return 'color-5';
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    numbers.forEach((number, index) => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number', getNumberColorClass(number));
        numberElement.textContent = number;
        numberElement.style.animationDelay = `${index * 0.1}s`;
        numbersContainer.appendChild(numberElement);
    });
}

function handleGenerateClick() {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
}

generateButton.addEventListener('click', handleGenerateClick);

// Initial generation
handleGenerateClick();

// --- Theme Switcher Logic ---
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.querySelector('.theme-switcher label');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        themeToggle.checked = true;
        themeLabel.textContent = 'Light Mode';
    } else {
        themeToggle.checked = false;
        themeLabel.textContent = 'Dark Mode';
    }
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

// Check for saved theme on load
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (prefersDark) {
    setTheme('dark');
} else {
    setTheme('light');
}
