document.addEventListener('DOMContentLoaded', () => {
    const countdown = document.getElementById('countdown');
    const musicButton = document.getElementById('toggle-music');
    const revealGiftButton = document.getElementById('reveal-gift');
    const giftContent = document.getElementById('gift-content');
    const letterContent = document.getElementById('letter-content');
    const wishForm = document.getElementById('wish-form');
    const wishesContainer = document.getElementById('wishes-container');
    const quizContainer = document.getElementById('quiz-container');

    const birthdayDate = new Date('2025-05-26T00:00:00');
    let musicPlaying = false;
    const audio = new Audio('Christina Perri - A Thousand Years [Official Music Video].mp3');

    function updateCountdown() {
        const now = new Date();
        const diff = birthdayDate - now;

        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    function toggleMusic() {
        if (musicPlaying) {
            audio.pause();
            musicButton.innerHTML = 'Play Music';
        } else {
            audio.play();
            musicButton.innerHTML = 'Pause Music';
        }
        musicPlaying = !musicPlaying;
    }

    function revealGift() {
        giftContent.style.display = 'block';
    }

    function addWish(name, message) {
        const wish = document.createElement('div');
        wish.classList.add('wish');
        wish.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
        wishesContainer.appendChild(wish);
    }

    function loadLoveLetter() {
        const letter = `
            My dearest love,
            <br><br>
            On this special day, I want to remind you how much you mean to me. Every moment with you is a treasure, and I am so grateful to have you in my life. I hope this birthday is as wonderful and amazing as you are. I love you more than words can express.
            <br><br>
            Forever yours,
            [Your Name]
        `;
        letterContent.innerHTML = letter;
    }

    function loadQuiz() {
        const quizQuestions = [
            {
                question: 'Where did we first meet?',
                answers: ['School', 'College', 'Work', 'Party'],
                correct: 2
            },
            {
                question: 'What is my favorite color?',
                answers: ['Red', 'Blue', 'Green', 'Yellow'],
                correct: 1
            },
            {
                question: 'What is our anniversary date?',
                answers: ['January 1', 'February 14', 'March 20', 'April 25'],
                correct: 3
            }
        ];

        quizQuestions.forEach((q, index) => {
            const questionElem = document.createElement('div');
            questionElem.classList.add('quiz-question');
            questionElem.innerHTML = `<p>${q.question}</p>`;

            q.answers.forEach((answer, i) => {
                const answerElem = document.createElement('button');
                answerElem.innerHTML = answer;
                answerElem.addEventListener('click', () => {
                    if (i === q.correct) {
                        alert('Correct!');
                    } else {
                        alert('Wrong! Try again.');
                    }
                });
                questionElem.appendChild(answerElem);
            });

            quizContainer.appendChild(questionElem);
        });
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    musicButton.addEventListener('click', toggleMusic);
    revealGiftButton.addEventListener('click', revealGift);
    wishForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        addWish(name, message);
        wishForm.reset();
    });

    loadLoveLetter();
    loadQuiz();
});