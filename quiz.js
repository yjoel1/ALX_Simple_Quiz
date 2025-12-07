function checkAnswer() {
    // Identify the correct answer
    var correctAnswer = "4";

    // Retrieve the user's selected answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
