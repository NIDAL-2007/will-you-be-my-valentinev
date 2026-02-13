const questionContainer = document.getElementById('question-container');
const successContainer = document.getElementById('success-container');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const noHoverMsg = document.getElementById('no-hover-msg');
const noSound = document.getElementById('no-sound');
const letterBtn = document.getElementById('letter-btn');
const loveLetter = document.getElementById('love-letter');

// Array of messages to cycle through when "No" is clicked
const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
];

let messageIndex = 0;
let currentFontSize = 1.2; // Initial font size in rem

// Handle "No" button click
noBtn.addEventListener('click', () => {
    // 1. Change the text of the No button
    messageIndex = (messageIndex + 1) % noMessages.length;
    noBtn.textContent = noMessages[messageIndex];

    // 2. Make the Yes button larger
    currentFontSize += 0.5; // Increase size by 0.5rem each click
    yesBtn.style.fontSize = `${currentFontSize}rem`;
});

noBtn.addEventListener('mouseover', () => {
    noHoverMsg.textContent = "Don't even think about it! 😤";
    noSound.currentTime = 0;
    noSound.play();
});

noBtn.addEventListener('mouseout', () => {
    noHoverMsg.textContent = "";
});

// Handle "Yes" button click
yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');

    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});

// Love Letter Logic
letterBtn.addEventListener('click', () => {
    loveLetter.style.display = 'block';
    letterBtn.style.display = 'none';
});
