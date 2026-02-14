// Quiz Questions about you and your girlfriend
const quizQuestions = [
    {
        question: "What's my favorite color?",
        options: ["Blue", "Pink", "Green", "Purple"],
        correct: 1
    },
    {
        question: "What's our favorite food to eat together?",
        options: ["Pizza", "Sushi", "Pasta", "Tacos"],
        correct: 0
    },
    {
        question: "What movie did we watch on our first date?",
        options: ["Romance film", "Comedy", "Action", "Drama"],
        correct: 1
    },
    {
        question: "What's my biggest dream?",
        options: ["Travel the world", "Success in career", "Start a family", "Learn new skills"],
        correct: 0
    },
    {
        question: "What's my favorite season?",
        options: ["Spring", "Summer", "Fall", "Winter"],
        correct: 2
    },
    {
        question: "What's the best memory we share?",
        options: ["First kiss", "First meeting", "A special trip", "Just being together"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;
let gameActive = false;
let wheelSpinning = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    setupHamburgerMenu();
});

// Countdown Timer
function startCountdown() {
    function updateCountdown() {
        // You can customize the start date here
        const startDate = new Date(2024, 1, 14); // Start date
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
}

// Hamburger Menu
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// Quiz Game
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    gameActive = true;
    document.querySelector('.quiz-container').classList.add('active');
    document.getElementById('quizResult').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    const container = document.getElementById('quizContainer');
    
    document.getElementById('quizQuestion').textContent = `Question ${currentQuestion + 1}: ${question.question}`;
    
    const optionsDiv = document.getElementById('quizOptions');
    optionsDiv.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = function() {
            selectAnswer(index);
        };
        optionsDiv.appendChild(button);
    });
}

function selectAnswer(index) {
    const question = quizQuestions[currentQuestion];
    
    if (index === question.correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const resultDiv = document.getElementById('quizResult');
    const percentage = (score / quizQuestions.length * 100).toFixed(0);
    
    let message = '';
    if (percentage === 100) {
        message = '🌟 Perfect! You know me so well! I love you! 💕';
    } else if (percentage >= 80) {
        message = '💕 Wow! You really know me well!';
    } else if (percentage >= 60) {
        message = '😊 Good job! You know quite a bit about me!';
    } else {
        message = '🎯 Time to get to know me better! Let\'s spend more time together! 💕';
    }
    
    resultDiv.innerHTML = `<p><strong>Your Score: ${score}/${quizQuestions.length} (${percentage}%)</strong></p><p>${message}</p>`;
    resultDiv.style.display = 'block';
    
    document.getElementById('quizOptions').innerHTML = '<button class="play-btn" onclick="startQuiz()">Try Again 🎮</button>';
}

// Heart Game
function startHeartGame() {
    const heartContainer = document.getElementById('clickableHearts');
    const gameScore = document.getElementById('gameScore');
    const gameTime = document.getElementById('gameTime');
    
    heartContainer.innerHTML = '';
    gameScore.textContent = '0';
    let score = 0;
    let timeLeft = 10;
    
    // Create hearts
    function createHearts() {
        if (timeLeft > 0) {
            const heart = document.createElement('div');
            heart.className = 'clickable-heart';
            heart.textContent = '❤️';
            
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            
            heart.style.left = randomX + '%';
            heart.style.top = randomY + '%';
            
            heart.onclick = function(e) {
                e.stopPropagation();
                score++;
                gameScore.textContent = score;
                heart.remove();
            };
            
            heartContainer.appendChild(heart);
            
            setTimeout(function() {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 1500);
        }
    }
    
    // Start spawning hearts
    const spawnInterval = setInterval(createHearts, 500);
    
    // Update timer
    const timerInterval = setInterval(function() {
        timeLeft--;
        gameTime.textContent = timeLeft;
        
        if (timeLeft === 0) {
            clearInterval(spawnInterval);
            clearInterval(timerInterval);
            heartContainer.innerHTML = `<div style="width: 100%; text-align: center; padding: 2rem;">
                <p style="font-size: 1.3rem; color: var(--primary-color); font-weight: bold;">
                    Game Over! You collected ${score} hearts! 💕
                </p>
                <button class="play-btn" onclick="startHeartGame()">Play Again ❤️</button>
            </div>`;
        }
    }, 1000);
}

// Spin the Wheel
const wheelOptions = [
    '💋 A sweet kiss',
    '🤗 A warm hug',
    '☕ Coffee date',
    '🍿 Movie night',
    '🕯️ Romantic dinner',
    '🚶 Long walk together',
    '🧺 Picnic in the park',
    '💃 Dance together'
];

function spinWheel() {
    if (wheelSpinning) return;
    
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('wheelResult');
    
    wheelSpinning = true;
    
    // Generate random rotation
    const randomSpin = Math.floor(Math.random() * 8) * 45 + Math.floor(Math.random() * 45);
    const finalRotation = 1800 + randomSpin;
    
    wheel.style.transform = `rotate(${finalRotation}deg)`;
    wheel.classList.add('spinning');
    
    setTimeout(function() {
        wheel.classList.remove('spinning');
        const selectedIndex = (8 - Math.floor(randomSpin / 45)) % 8;
        result.textContent = wheelOptions[selectedIndex];
        result.style.display = 'block';
        wheelSpinning = false;
    }, 4000);
}

// Add Message to Wall
function addMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message === '') {
        alert('Please write a message first! 💕');
        return;
    }
    
    const messagesWall = document.getElementById('messagesWall');
    const messageCard = document.createElement('div');
    messageCard.className = 'message-card';
    messageCard.style.animation = 'slideUp 0.5s ease-out';
    
    const today = new Date();
    const date = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    
    messageCard.innerHTML = `
        <p>"${message}"</p>
        <span class="message-date">${date}</span>
    `;
    
    messagesWall.insertBefore(messageCard, messagesWall.firstChild);
    input.value = '';
    
    // Save to localStorage
    saveMessages();
}

// Save and Load Messages
function saveMessages() {
    const cards = document.querySelectorAll('.message-card');
    const messages = [];
    
    cards.forEach(card => {
        const text = card.querySelector('p').textContent.replace(/"/g, '');
        const date = card.querySelector('.message-date').textContent;
        messages.push({ text, date });
    });
    
    localStorage.setItem('loveMessages', JSON.stringify(messages));
}

function loadMessages() {
    const saved = localStorage.getItem('loveMessages');
    if (saved) {
        const messages = JSON.parse(saved);
        const messagesWall = document.getElementById('messagesWall');
        
        // Keep first 3 default messages
        const defaultCards = messagesWall.querySelectorAll('.message-card');
        defaultCards.forEach((card, index) => {
            if (index >= 3) card.remove();
        });
        
        messages.forEach(msg => {
            const messageCard = document.createElement('div');
            messageCard.className = 'message-card';
            messageCard.innerHTML = `
                <p>"${msg.text}"</p>
                <span class="message-date">${msg.date}</span>
            `;
            messagesWall.appendChild(messageCard);
        });
    }
}

// Trigger Surprise
function triggerSurprise() {
    const message = document.getElementById('surpriseMessage');
    const btn = document.getElementById('surpriseBtn');
    
    message.style.display = 'block';
    btn.style.display = 'none';
    
    // Create confetti
    createConfetti();
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const confettiEmojis = ['❤️', '💕', '💖', '💗', '💝', '✨', '🎉', '🌹'];
    
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = '-10px';
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        
        confettiContainer.appendChild(piece);
        
        setTimeout(() => piece.remove(), 3000);
    }
}

// Smooth Scroll
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Music Player (Mock)
let isPlaying = false;

function togglePlayPause() {
    const btn = event.target;
    isPlaying = !isPlaying;
    btn.textContent = isPlaying ? '⏸️ Pause' : '▶️ Play';
    
    if (isPlaying) {
        // In a real app, you'd play actual music
        console.log('Playing love songs...');
    }
}

function nextSong() {
    const songs = [
        'Your beautiful presence in my life ✨',
        'Every moment with you is a gift 🎁',
        'You are my favorite melody 🎵',
        'Love is a journey with you 🛤️'
    ];
    
    const info = document.querySelector('.player-info');
    const currentIndex = songs.indexOf(info.textContent);
    const nextIndex = (currentIndex + 1) % songs.length;
    
    info.textContent = songs[nextIndex];
}

// Gallery Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('You can add photos here! 📸\n\nTo add your memories, upload your favorite photos to this gallery.');
        });
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && document.getElementById('messageInput') === document.activeElement) {
        addMessage();
    }
});

// Load messages on page load
window.addEventListener('load', loadMessages);

// Easter egg - secret commands
let commandStack = '';
document.addEventListener('keydown', function(e) {
    commandStack += e.key.toLowerCase();
    
    if (commandStack.includes('love')) {
        createConfetti();
        commandStack = '';
    }
    
    if (commandStack.length > 10) {
        commandStack = commandStack.slice(-10);
    }
});

console.log('💕 Welcome to our love website! Feel free to customize it with your favorite memories and messages! 💕');
