function placeBet(choice) {
  const stake = parseInt(document.getElementById("stake-amount").value) || 100;
  const result = document.getElementById("bet-result");
  result.classList.remove("hidden");

  // Mock resolution after 2 seconds
  setTimeout(() => {
    const outcome = Math.random() > 0.5 ? "Yes" : "No";
    if (outcome === choice) {
      document.getElementById("bet-title").textContent = "You Won!";
      document.getElementById("bet-title").style.color = "#00cc88";
      document.getElementById("bet-text").innerHTML = `The event resolved as ${outcome}. You earned ${stake * 2} mock EDS!`;
      document.getElementById("outcome-score").textContent = "+200%";
      document.getElementById("outcome-score").style.color = "#00cc88";
    } else {
      document.getElementById("bet-title").textContent = "You Lost";
      document.getElementById("bet-title").style.color = "#ff4444";
      document.getElementById("bet-text").innerHTML = `The event resolved as ${outcome}. Stake lost.`;
      document.getElementById("outcome-score").textContent = "-100%";
      document.getElementById("outcome-score").style.color = "#ff4444";
    }
  }, 2000);
}

function runAgent() {
  const result = document.getElementById("agent-result");
  result.classList.remove("hidden");
  document.getElementById("prediction-text").innerHTML = "Nessy Agent is analyzing...<br><br>Prediction: 68% chance Yes (based on current Luffa growth & Odyssey trends)";
}
