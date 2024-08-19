const title = document.querySelector('.text h2'); 
const wallcam = document.getElementById('wallcam');
const emojis = document.getElementById('emojis');
const inputnumber = document.getElementById('input-number');
const button = document.getElementById('button');
const wallcamText = document.querySelector('.wallcam-text');

let selectedEmoji = ""; 

button.onclick = handleButtonClick;

document.querySelectorAll('#emojis .radio-label').forEach(label => {
    label.onclick = function() {
        selectedEmoji = this.innerText;
    }
});

function handleButtonClick() {
    if (button.innerText === "Start") {
        startGame();
    } else if (button.innerText === "Continue") {
        showSelectedEmoji();
    } else if (button.innerText === "Generate") {
        generateEmoji(); // Handle pyramid generation
    }
}

function startGame() {
    title.innerText = "Choose your favorite emoji:";
    wallcam.style.display = 'none';
    emojis.style.display = 'flex';
    button.innerText = "Continue";
    wallcamText.style.display = 'none'
}

function showSelectedEmoji() {
    if (selectedEmoji) {
        title.innerText = "Choose how many pyramids you want to generate with " + selectedEmoji;
        emojis.style.display = 'none';
        button.innerText = "Generate";
        title.style.color = "rgba(183, 255, 224, 1)";
        inputnumber.style.display = 'block';
    } else {
        title.innerText = "Please choose an emoji first!";
        title.style.color = "red"
    } 
}

function generateEmoji() {
    const numberOfLevels = parseInt(inputnumber.value); // Use inputnumber to match your variable
  
    if (isNaN(numberOfLevels) || numberOfLevels <= 0) {
      title.innerText = "Please enter a valid number!";
      title.style.color = "red"; // Add color change for better feedback
      return;
    }
  
    let pyramid = "";
    
    // Create the pyramid
    for (let i = 1; i <= numberOfLevels; i++) {
      pyramid += selectedEmoji.repeat(i) + "\n";
    }
    
    // Display the pyramid
    title.innerText = "Your emoji pyramid:\n" + pyramid;
    
    // Hide the input number field and the button after generating the pyramid
    inputnumber.style.display = 'none'; // Use inputnumber to match your variable
    button.style.display = 'none';
    title.style.color = "rgba(183, 255, 224, 1)"
}