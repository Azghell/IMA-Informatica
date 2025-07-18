// Data for the peripherals game
const peripherals = [
    { name: "Teclado", image: "imagenes/teclado.png", correctType: "entrada", description: "Dispositivo para introducir datos y comandos." },
    { name: "Monitor", image: "imagenes/monitor.png", correctType: "salida", description: "Muestra información visualmente al usuario." },
    { name: "Impresora", image: "imagenes/impresora.png", correctType: "salida", description: "Produce copias físicas de documentos e imágenes." },
    { name: "Ratón", image: "imagenes/raton.png", correctType: "entrada", description: "Permite la interacción con la interfaz gráfica de usuario." },
    { name: "Micrófono", image: "imagenes/microfono.png", correctType: "entrada", description: "Captura sonido para grabar o transmitir." },
    { name: "Altavoces", image: "imagenes/altavoces.png", correctType: "salida", description: "Reproducen audio." },
    { name: "Cámara Web", image: "imagenes/camara_web.png", correctType: "entrada", description: "Captura imágenes y video en tiempo real." },
    { name: "Disco Duro Externo", image: "imagenes/disco_duro_externo.png", correctType: "almacenamiento", description: "Unidad de almacenamiento portátil de gran capacidad." },
    { name: "Pendrive USB", image: "imagenes/pendrive.png", correctType: "almacenamiento", description: "Dispositivo de almacenamiento de datos portátil y pequeño." },
    { name: "Router", image: "imagenes/router.png", correctType: "ambos", description: "Dispositivo que envía y recibe datos en una red." },
    { name: "Auriculares con Micrófono", image: "imagenes/auriculares_con_microfono.png", correctType: "ambos", description: "Permiten escuchar audio y grabar voz." },
    { name: "Escáner", image: "imagenes/escaner.png", correctType: "entrada", description: "Digitaliza documentos e imágenes físicas." },
    { name: "Proyector", image: "imagenes/proyector.png", correctType: "salida", description: "Muestra imágenes y videos en una superficie grande." },
    { name: "Gamepad", image: "imagenes/gamepad.png", correctType: "entrada", description: "Controlador para videojuegos." },
    { name: "Tableta Gráfica", image: "imagenes/tableta_grafica.png", correctType: "entrada", description: "Permite dibujar y escribir digitalmente." },
    { name: "Memoria RAM", image: "imagenes/memoria_ram.png", correctType: "almacenamiento", description: "Almacenamiento temporal de datos para acceso rápido." },
    { name: "SSD", image: "imagenes/ssd.png", correctType: "almacenamiento", description: "Unidad de estado sólido para almacenamiento rápido." },
    { name: "Pantalla Táctil", image: "imagenes/pantalla_tactil.png", correctType: "ambos", description: "Permite entrada de datos y muestra información." },
    { name: "Lápiz Óptico", image: "imagenes/lapiz_optico.png", correctType: "entrada", description: "Permite dibujar o seleccionar en pantallas." },
    { name: "Plotter", image: "imagenes/plotter.png", correctType: "salida", description: "Impresora de gran formato para dibujos técnicos." }
];

let shuffledPeripherals = [];
let currentPeripheralIndex = 0;
let score = 0;
let errors = 0;
let timerInterval;
let startTime;
let gameStarted = false;
let answerBlocked = false; // To prevent multiple clicks on answer buttons for a single question

// DOM Elements for Game - These will be available after the HTML is loaded
let startMenu;
let startGameButton;
let gamePlayArea;
let timerDisplay;
let scoreDisplay;
let peripheralCard;
let peripheralImage;
let peripheralName;
let peripheralDescription;
let answerButtons; // NodeList, will be re-queried
let endGameButton;
let resultScreen;
let correctAnswersDisplay;
let incorrectAnswersDisplay;
let finalTimeDisplay;
let retryGameButton;
let exitGameButton;

// Function to initialize DOM elements and attach event listeners
function initializeGameElements() {
    startMenu = document.getElementById('start-menu');
    startGameButton = document.getElementById('start-game-button');
    gamePlayArea = document.getElementById('game-play-area');
    timerDisplay = document.getElementById('timer');
    scoreDisplay = document.getElementById('score-display');
    peripheralCard = document.getElementById('peripheral-card');
    peripheralImage = document.getElementById('peripheral-image');
    peripheralName = document.getElementById('peripheral-name');
    peripheralDescription = document.getElementById('peripheral-description');
    answerButtons = document.querySelectorAll('.answer-button'); // Re-query
    endGameButton = document.getElementById('end-game-button');
    resultScreen = document.getElementById('result-screen');
    correctAnswersDisplay = document.getElementById('correct-answers');
    incorrectAnswersDisplay = document.getElementById('incorrect-answers');
    finalTimeDisplay = document.getElementById('final-time');
    retryGameButton = document.getElementById('retry-game-button');
    exitGameButton = document.getElementById('exit-game-button');

    // Attach Event Listeners
    startGameButton.addEventListener('click', startGame);
    endGameButton.addEventListener('click', endGame);
    retryGameButton.addEventListener('click', resetGame);
    exitGameButton.addEventListener('click', exitGame);

    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            checkAnswer(button.dataset.type);
        });
    });

    // Initial state for the game
    resetGame();
}


// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.textContent = formatTime(elapsedTime);
}

function displayPeripheral() {
    if (currentPeripheralIndex < shuffledPeripherals.length) {
        const peripheral = shuffledPeripherals[currentPeripheralIndex];
        peripheralName.textContent = peripheral.name;
        peripheralDescription.textContent = peripheral.description;
        if (peripheral.image) {
            peripheralImage.src = peripheral.image;
            peripheralImage.classList.remove('hidden');
            // Fallback for image loading errors
            peripheralImage.onerror = function() {
                this.src = `https://placehold.co/200x200/cccccc/000000?text=${encodeURIComponent(peripheral.name)}`;
            };
        } else {
            peripheralImage.classList.add('hidden');
        }
        peripheralCard.classList.remove('border-green-500', 'border-red-500'); // Reset border color
        answerButtons.forEach(button => {
            button.disabled = false; // Enable buttons
            button.classList.remove('opacity-50', 'bg-green-700', 'bg-red-700', 'bg-purple-700', 'bg-blue-700'); // Reset button styles
            button.classList.add(
                button.dataset.type === 'entrada' ? 'bg-blue-500' :
                button.dataset.type === 'salida' ? 'bg-red-500' :
                button.dataset.type === 'ambos' ? 'bg-purple-500' : 'bg-green-500'
            );
            button.classList.add(
                button.dataset.type === 'entrada' ? 'hover:bg-blue-600' :
                button.dataset.type === 'salida' ? 'hover:bg-red-600' :
                button.dataset.type === 'ambos' ? 'hover:bg-purple-600' : 'hover:bg-green-600'
            );
        });
        answerBlocked = false; // Allow answering for the new peripheral
    } else {
        endGame(); // End game if no more peripherals
    }
}

function checkAnswer(selectedType) {
    if (answerBlocked) return; // Prevent multiple answers for the same question
    answerBlocked = true;

    const peripheral = shuffledPeripherals[currentPeripheralIndex];
    const correctType = peripheral.correctType;
    const selectedButton = document.querySelector(`.answer-button[data-type="${selectedType}"]`);

    answerButtons.forEach(button => button.disabled = true); // Disable all answer buttons immediately

    if (selectedType === correctType) {
        score++;
        peripheralCard.classList.add('border-green-500');
        if (selectedButton) {
            selectedButton.classList.remove(
                selectedButton.dataset.type === 'entrada' ? 'bg-blue-500' :
                selectedButton.dataset.type === 'salida' ? 'bg-red-500' :
                selectedButton.dataset.type === 'ambos' ? 'bg-purple-500' : 'bg-green-500'
            );
            selectedButton.classList.add('bg-green-700');
        }
    } else {
        errors++;
        score--; // Deduct a point for incorrect answer
        peripheralCard.classList.add('border-red-500');
        if (selectedButton) {
            selectedButton.classList.remove(
                selectedButton.dataset.type === 'entrada' ? 'bg-blue-500' :
                selectedButton.dataset.type === 'salida' ? 'bg-red-500' :
                selectedButton.dataset.type === 'ambos' ? 'bg-purple-500' : 'bg-green-500'
            );
            selectedButton.classList.add('bg-red-700');
        }
        // Highlight the correct answer
        const correctAnswerButton = document.querySelector(`.answer-button[data-type="${correctType}"]`);
        if (correctAnswerButton) {
            correctAnswerButton.classList.remove(
                correctAnswerButton.dataset.type === 'entrada' ? 'bg-blue-500' :
                correctAnswerButton.dataset.type === 'salida' ? 'bg-red-500' :
                correctAnswerButton.dataset.type === 'ambos' ? 'bg-purple-500' : 'bg-green-500'
            );
            correctAnswerButton.classList.add('bg-green-700'); // Or a distinct highlight color
        }
    }
    scoreDisplay.textContent = score;

    // Auto-advance to the next peripheral after a shorter delay
    setTimeout(() => {
        currentPeripheralIndex++;
        if (currentPeripheralIndex < shuffledPeripherals.length) {
            displayPeripheral();
        } else {
            endGame();
        }
    }, 800); // Reduced delay to 800ms (0.8 seconds)
}

function startGame() {
    startMenu.classList.add('hidden');
    startMenu.classList.remove('flex'); // Ensure flex is removed
    gamePlayArea.classList.remove('hidden');
    gamePlayArea.classList.add('flex');
    resultScreen.classList.add('hidden');
    resultScreen.classList.remove('flex'); // Ensure flex is removed

    shuffledPeripherals = shuffleArray([...peripherals]); // Create a shuffled copy
    currentPeripheralIndex = 0;
    score = 0;
    errors = 0;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = '00:00'; // Reset timer display
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    gameStarted = true;
    displayPeripheral();
}

function endGame() {
    clearInterval(timerInterval);
    gameStarted = false;

    gamePlayArea.classList.add('hidden');
    gamePlayArea.classList.remove('flex');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('flex');

    correctAnswersDisplay.textContent = score;
    incorrectAnswersDisplay.textContent = errors;
    finalTimeDisplay.textContent = timerDisplay.textContent;
}

function resetGame() {
    startMenu.classList.remove('hidden');
    startMenu.classList.add('flex');
    gamePlayArea.classList.add('hidden');
    gamePlayArea.classList.remove('flex');
    resultScreen.classList.add('hidden');
    resultScreen.classList.remove('flex');
    timerDisplay.textContent = '00:00';
    peripheralCard.classList.remove('border-green-500', 'border-red-500'); // Reset border color
    clearInterval(timerInterval); // Ensure timer is stopped
}

// Function to call the main index.html to return to main content
function exitGame() {
    resetGame(); // Reset game state
    // Call a function defined in the global scope of index.html
    if (window.returnToMainContent) {
        window.returnToMainContent();
    }
}

// Expose initializeGameElements to the global scope so index.html can call it
window.initializePeripheralsGame = initializeGameElements;
