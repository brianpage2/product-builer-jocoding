
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
