function placeBet(choice) {
  const stake = parseInt(document.getElementById("stake-amount").value) || 100;
  const event = document.getElementById("event-select").value;
  const result = document.getElementById("bet-result");
  result.classList.remove("hidden");

  // Mock resolution after 2 seconds
  setTimeout(() => {
    const outcome = Math.random() > 0.5 ? "Yes" : "No";
    if (outcome === choice) {
      document.getElementById("bet-title").textContent = "You Won!";
      document.getElementById("bet-title").style.color = "#00cc88";
      document.getElementById("bet-text").innerHTML = `Event: ${event}<br>The outcome was ${outcome}. You earned ${stake * 2} mock EDS!`;
      document.getElementById("outcome-score").textContent = "+200%";
      document.getElementById("outcome-score").style.color = "#00cc88";
    } else {
      document.getElementById("bet-title").textContent = "You Lost";
      document.getElementById("bet-title").style.color = "#ff4444";
      document.getElementById("bet-text").innerHTML = `Event: ${event}<br>The outcome was ${outcome}. Stake lost.`;
      document.getElementById("outcome-score").textContent = "-100%";
      document.getElementById("outcome-score").style.color = "#ff4444";
    }
  }, 2000);
}

function runAgent() {
  const event = document.getElementById("event-select").value;
  const result = document.getElementById("agent-result");
  result.classList.remove("hidden");

  // Mock AI analysis
  const probability = Math.floor(Math.random() * 50) + 50; // 50-99% for demo
  const advice = probability > 60 ? "Yes" : "No";
  const reason = advice === "Yes" ? "Strong ecosystem growth in Luffa, Odyssey, and Nessy utilities will drive it forward." : "Current market conditions and adoption challenges may slow progress.";

  document.getElementById("prediction-text").innerHTML = `For event: "${event}"<br>Nessy AI predicts ${probability}% chance of Yes.`;
  document.getElementById("recommendation").innerHTML = `Recommendation: Bet ${advice}.<br>Reason: ${reason}`;
}
