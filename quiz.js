function checkAnswer() {
const correctAnswer = "4"; // Step 2
const selectedOption = document.querySelector('input[name="quiz"]:checked'); // Step 3

const feedback = document.getElementById("feedback");

if (!selectedOption) {
feedback.textContent = "Please select an answer.";
return;
}

const userAnswer = selectedOption.value;

if (userAnswer === correctAnswer) {
feedback.textContent = "Correct! Well done.";
} else {
feedback.textContent = "That's incorrect. Try again!";
}
}

// Step 5 - Add event listener to the button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
