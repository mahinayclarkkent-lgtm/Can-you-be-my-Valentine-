var noClicks = 0;

// Start screen
function proceed() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("passwordScreen").style.display = "block";
}

// Password check
function checkPassword() {
  var pass = document.getElementById("password").value;
  if (pass === "I love you") {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("questionText").innerText = "Can you be my Valentine?";
  } else {
    alert("Wrong password 💔");
  }
}

// No button behavior
function noClicked() {
  noClicks++;
  var noBtn = document.getElementById("noBtn");

  if (noClicks == 1) {
    noBtn.innerHTML = "Are you sure?";
  } else if (noClicks == 2) {
    noBtn.innerHTML = "Please be my Valentine";
  } else {
    noBtn.style.display = "none";
    document.getElementById("yesBtn").style.margin = "0 auto";
  }

  // Move No button randomly
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.floor(Math.random() * (window.innerWidth - 120)) + "px";
  noBtn.style.top = Math.floor(Math.random() * 200 + 150) + "px";
}

// Yes button final message with continuous hearts
function yesClicked() {
  document.getElementById("question").style.display = "none";

  // End screen container
  var end = document.createElement("div");
  end.id = "endScreen";
  end.innerHTML = "<h1>Yay! You're now my Valentine! 💖</h1>";
  document.body.appendChild(end);
  end.style.display = "block";

  // Create continuous floating hearts
  for (let i = 0; i < 50; i++) {
    createHeart(end);
  }

  // Keep generating new hearts continuously
  setInterval(() => createHeart(end), 500);
}

// Function to create a single heart with random properties
function createHeart(container) {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  let size = 10 + Math.random() * 25;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  heart.style.opacity = Math.random() * 0.7 + 0.3;
  container.appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => container.removeChild(heart), 5000);
}