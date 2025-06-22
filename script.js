// Quiz data by category
const quizData = {
    general: [
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correct: 1,
            explanation: "Mars is called the Red Planet because of the reddish iron oxide on its surface."
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2,
            explanation: "The Mona Lisa was painted by Leonardo da Vinci in the early 16th century."
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3,
            explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
        },
        {
            question: "Which country is home to the kangaroo?",
            options: ["New Zealand", "Australia", "South Africa", "Brazil"],
            correct: 1,
            explanation: "Kangaroos are native to Australia."
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2,
            explanation: "The chemical symbol for gold is Au, from the Latin word 'aurum'."
        },
        {
            question: "Which is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "The number 2 is the smallest prime number."
        },
        {
            question: "How many sides does a hexagon have?",
            options: ["5", "6", "7", "8"],
            correct: 1,
            explanation: "A hexagon has 6 sides."
        },
        {
            question: "What is the capital city of Japan?",
            options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
            correct: 2,
            explanation: "Tokyo is the capital city of Japan."
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
            correct: 1,
            explanation: "Oxygen has the chemical symbol 'O'."
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1,
            explanation: "Romeo and Juliet was written by William Shakespeare."
        }
    ],
    science: [
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2,
            explanation: "Diamond is the hardest naturally occurring substance on Earth."
        },
        {
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 1,
            explanation: "Saturn has the most moons, with 82 confirmed moons."
        },
        {
            question: "What is the smallest unit of matter?",
            options: ["Atom", "Molecule", "Cell", "Electron"],
            correct: 0,
            explanation: "The atom is the smallest unit of matter that defines the chemical elements."
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "250,000 km/s"],
            correct: 0,
            explanation: "The speed of light in a vacuum is approximately 300,000 kilometers per second."
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 1,
            explanation: "Plants absorb carbon dioxide from the atmosphere during photosynthesis."
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "N2"],
            correct: 0,
            explanation: "The chemical formula for water is H2O, representing two hydrogen atoms and one oxygen atom."
        },
        {
            question: "Which scientist proposed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            correct: 1,
            explanation: "Albert Einstein proposed the theory of relativity."
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Liver", "Brain", "Skin"],
            correct: 3,
            explanation: "The skin is the largest organ in the human body."
        },
        {
            question: "Which of these is NOT a state of matter?",
            options: ["Solid", "Liquid", "Gas", "Mineral"],
            correct: 3,
            explanation: "Mineral is not a state of matter. The common states of matter are solid, liquid, and gas."
        },
        {
            question: "What is the closest star to Earth?",
            options: ["Proxima Centauri", "Alpha Centauri", "Polaris", "The Sun"],
            correct: 3,
            explanation: "The Sun is the closest star to Earth."
        }
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
            correct: 2,
            explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
        },
        {
            question: "In which year did World War II end?",
            options: ["1943", "1945", "1947", "1950"],
            correct: 1,
            explanation: "World War II ended in 1945."
        },
        {
            question: "Which ancient civilization built the pyramids at Giza?",
            options: ["Romans", "Greeks", "Mayans", "Egyptians"],
            correct: 3,
            explanation: "The pyramids at Giza were built by the ancient Egyptians."
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
            correct: 0,
            explanation: "Amelia Earhart was the first woman to fly solo across the Atlantic Ocean in 1932."
        },
        {
            question: "The Renaissance period began in which country?",
            options: ["France", "England", "Italy", "Germany"],
            correct: 2,
            explanation: "The Renaissance began in Italy in the 14th century."
        },
        {
            question: "Which empire was ruled by Genghis Khan?",
            options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Byzantine Empire"],
            correct: 2,
            explanation: "Genghis Khan ruled the Mongol Empire."
        },
        {
            question: "When did the French Revolution begin?",
            options: ["1689", "1789", "1889", "1989"],
            correct: 1,
            explanation: "The French Revolution began in 1789."
        },
        {
            question: "Who discovered America in 1492?",
            options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "John Cabot"],
            correct: 2,
            explanation: "Christopher Columbus reached the Americas in 1492."
        },
        {
            question: "Which civilization developed the first known writing system?",
            options: ["Sumerians", "Egyptians", "Chinese", "Greeks"],
            correct: 0,
            explanation: "The Sumerians developed the first known writing system called cuneiform."
        },
        {
            question: "Who was the first female Prime Minister of the United Kingdom?",
            options: ["Theresa May", "Margaret Thatcher", "Queen Elizabeth II", "Queen Victoria"],
            correct: 1,
            explanation: "Margaret Thatcher was the first female Prime Minister of the UK, serving from 1979 to 1990."
        }
    ],
    geography: [
        {
            question: "What is the largest country in the world by land area?",
            options: ["China", "United States", "Canada", "Russia"],
            correct: 3,
            explanation: "Russia is the largest country in the world by land area."
        },
        {
            question: "Which mountain is the tallest in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            correct: 1,
            explanation: "Mount Everest is the tallest mountain in the world."
        },
        {
            question: "Which river is the longest in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correct: 1,
            explanation: "The Nile River is generally considered the longest river in the world."
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correct: 2,
            explanation: "Canberra is the capital city of Australia."
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Antarctic Desert"],
            correct: 3,
            explanation: "The Antarctic Desert is the largest desert in the world."
        },
        {
            question: "Which country has the most natural lakes?",
            options: ["United States", "Russia", "Canada", "Finland"],
            correct: 2,
            explanation: "Canada has the most natural lakes in the world."
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
            correct: 2,
            explanation: "Vatican City is the smallest country in the world."
        },
        {
            question: "Which continent is the driest inhabited continent on Earth?",
            options: ["Africa", "Asia", "Australia", "South America"],
            correct: 2,
            explanation: "Australia is the driest inhabited continent on Earth."
        },
        {
            question: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            correct: 3,
            explanation: "Ottawa is the capital city of Canada."
        },
        {
            question: "Which country is both in Europe and Asia?",
            options: ["Russia", "Turkey", "Kazakhstan", "All of these"],
            correct: 3,
            explanation: "Russia, Turkey, and Kazakhstan all have territory in both Europe and Asia."
        }
    ],
    entertainment: [
        {
            question: "Who played Iron Man in the Marvel Cinematic Universe?",
            options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
            correct: 2,
            explanation: "Robert Downey Jr. played Iron Man/Tony Stark in the Marvel Cinematic Universe."
        },
        {
            question: "Which band performed the song 'Bohemian Rhapsody'?",
            options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
            correct: 2,
            explanation: "Queen performed the song 'Bohemian Rhapsody', with Freddie Mercury as the lead vocalist."
        },
        {
            question: "What was the first feature-length animated movie ever released?",
            options: ["Bambi", "Snow White and the Seven Dwarfs", "Pinocchio", "Fantasia"],
            correct: 1,
            explanation: "Snow White and the Seven Dwarfs, released in 1937, was the first full-length animated feature film."
        },
        {
            question: "Who is the author of the Harry Potter book series?",
            options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "C.S. Lewis"],
            correct: 1,
            explanation: "J.K. Rowling is the author of the Harry Potter book series."
        },
        {
            question: "Which TV show features the character Walter White?",
            options: ["The Walking Dead", "Game of Thrones", "Breaking Bad", "The Sopranos"],
            correct: 2,
            explanation: "Walter White is the main character in the TV show Breaking Bad."
        },
        {
            question: "Who directed the movie 'Titanic'?",
            options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
            correct: 1,
            explanation: "James Cameron directed the 1997 movie 'Titanic'."
        },
        {
            question: "Which video game franchise features a character named Master Chief?",
            options: ["Call of Duty", "Halo", "Destiny", "Gears of War"],
            correct: 1,
            explanation: "Master Chief is the main character in the Halo video game franchise."
        },
        {
            question: "Who is known as the 'King of Pop'?",
            options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
            correct: 1,
            explanation: "Michael Jackson is known as the 'King of Pop'."
        },
        {
            question: "Which actress played Katniss Everdeen in 'The Hunger Games' movies?",
            options: ["Emma Watson", "Jennifer Lawrence", "Shailene Woodley", "Kristen Stewart"],
            correct: 1,
            explanation: "Jennifer Lawrence played Katniss Everdeen in 'The Hunger Games' movie series."
        },
        {
            question: "What is the name of the fictional city where Batman operates?",
            options: ["Metropolis", "Star City", "Central City", "Gotham City"],
            correct: 3,
            explanation: "Batman operates in the fictional Gotham City."
        }
    ]
};

// Game variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let timeLeft = 30;
let timer;
let timerBar;
let selectedCategory = "general";

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-btn');
const categorySelect = document.getElementById('category-select');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const timerElement = document.getElementById('timer');
const timerBarElement = document.getElementById('timer-bar');
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');
const resultIconElement = document.getElementById('result-icon');
const playAgainButton = document.getElementById('play-again-btn');
const shareButton = document.getElementById('share-btn');
const feedbackToast = document.getElementById('feedback-toast');
const feedbackMessage = document.getElementById('feedback-message');

// Event Listeners
startButton.addEventListener('click', startQuiz);
playAgainButton.addEventListener('click', resetQuiz);
shareButton.addEventListener('click', shareResult);
categorySelect.addEventListener('change', (e) => {
    selectedCategory = e.target.value;
});

// Start the quiz
function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // Get questions for selected category
    currentQuestions = [...quizData[selectedCategory]];
    // Shuffle questions
    shuffleArray(currentQuestions);
    
    // Set total questions
    totalQuestionsElement.textContent = currentQuestions.length;
    
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    updateScore();
    
    // Load first question
    loadQuestion();
}

// Load question
function loadQuestion() {
    // Reset timer
    clearInterval(timer);
    timeLeft = 30;
    timerElement.textContent = timeLeft;
    timerBarElement.style.width = '100%';
    
    // Start timer
    startTimer();
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add options
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn', 'w-full', 'text-left', 'p-4', 'rounded-lg', 'bg-white', 'border', 'border-gray-300', 'hover:bg-gray-50', 'transition-all', 'duration-200');
        button.dataset.index = index;
        
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

// Check answer
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll('button');
    
    // Disable all buttons
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // Highlight correct answer
    buttons[currentQuestion.correct].classList.remove('bg-white', 'border-gray-300');
    buttons[currentQuestion.correct].classList.add('bg-green-500', 'text-white', 'border-green-500');
    
    // Check if selected answer is correct
    if (selectedIndex === currentQuestion.correct) {
        // Correct answer
        score++;
        streak++;
        updateScore();
        showFeedback(true, currentQuestion.explanation);
    } else {
        // Wrong answer
        streak = 0;
        updateScore();
        
        // Highlight selected wrong answer
        buttons[selectedIndex].classList.remove('bg-white', 'border-gray-300');
        buttons[selectedIndex].classList.add('bg-red-500', 'text-white', 'border-red-500');
        
        showFeedback(false, currentQuestion.explanation);
    }
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 2000);
}

// Start timer
function startTimer() {
    timerBarElement.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        // Update timer bar
        const percentage = (timeLeft / 30) * 100;
        timerBarElement.style.width = `${percentage}%`;
        
        // Change color based on time left
        if (timeLeft <= 10) {
            timerBarElement.classList.add('bg-red-500');
            timerBarElement.classList.remove('bg-white');
        } else {
            timerBarElement.classList.add('bg-white');
            timerBarElement.classList.remove('bg-red-500');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            // Time's up - count as wrong answer
            const currentQuestion = currentQuestions[currentQuestionIndex];
            showFeedback(false, "Time's up! " + currentQuestion.explanation);
            
            // Highlight correct answer
            const buttons = optionsContainer.querySelectorAll('button');
            buttons.forEach(button => {
                button.disabled = true;
            });
            buttons[currentQuestion.correct].classList.remove('bg-white', 'border-gray-300');
            buttons[currentQuestion.correct].classList.add('bg-green-500', 'text-white', 'border-green-500');
            
            // Reset streak
            streak = 0;
            updateScore();
            
            // Move to next question after delay
            setTimeout(() => {
                currentQuestionIndex++;
                
                if (currentQuestionIndex < currentQuestions.length) {
                    loadQuestion();
                } else {
                    showResults();
                }
            }, 2000);
        }
    }, 1000);
}

// Show feedback toast
function showFeedback(isCorrect, message) {
    feedbackToast.classList.remove('hidden', 'bg-green-500', 'bg-red-500');
    
    if (isCorrect) {
        feedbackToast.classList.add('bg-green-500');
        feedbackMessage.innerHTML = `<i class="fas fa-check-circle mr-2"></i> Correct! ${message}`;
    } else {
        feedbackToast.classList.add('bg-red-500');
        feedbackMessage.innerHTML = `<i class="fas fa-times-circle mr-2"></i> ${message}`;
    }
    
    feedbackToast.classList.add('text-white');
    
    // Hide after 3 seconds
    setTimeout(() => {
        feedbackToast.classList.add('hidden');
    }, 3000);
}

// Show results screen
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    finalScoreElement.textContent = `${score}/${currentQuestions.length}`;
    
    // Calculate percentage
    const percentage = (score / currentQuestions.length) * 100;
    
    // Set result message and icon based on score
    if (percentage >= 90) {
        resultMessageElement.textContent = "Outstanding! You're a quiz master!";
        resultIconElement.className = "fas fa-crown text-5xl text-yellow-500 mb-4";
    } else if (percentage >= 70) {
        resultMessageElement.textContent = "Great job! You know your stuff!";
        resultIconElement.className = "fas fa-trophy text-5xl text-yellow-500 mb-4";
    } else if (percentage >= 50) {
        resultMessageElement.textContent = "Good effort! Room for improvement.";
        resultIconElement.className = "fas fa-medal text-5xl text-yellow-500 mb-4";
    } else {
        resultMessageElement.textContent = "Keep practicing! You'll do better next time.";
        resultIconElement.className = "fas fa-book text-5xl text-blue-500 mb-4";
    }
}

// Reset quiz to welcome screen
function resetQuiz() {
    resultsScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
}

// Share result
function shareResult() {
    const text = `I scored ${score}/${currentQuestions.length} on the QuizzyPop ${selectedCategory} quiz!`;
    
    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: 'My QuizzyPop Result',
            text: text
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(text)
            .then(() => {
                showFeedback(true, "Result copied to clipboard!");
            })
            .catch(err => {
                console.log('Failed to copy text: ', err);
            });
    }
}

// Update score display
function updateScore() {
    scoreElement.textContent = score;
    streakElement.textContent = streak;
    
    // Update streak icon animation if streak is high
    if (streak >= 3) {
        document.getElementById('streak-icon').classList.add('animate-pulse');
    } else {
        document.getElementById('streak-icon').classList.remove('animate-pulse');
    }
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set default category
    categorySelect.value = selectedCategory;
});
