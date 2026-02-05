function simulateLeak() {
  const message = document.getElementById("message").value.trim() || "Your secret message";
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  document.getElementById("result-title").textContent = "Web2 Leak Detected!";
  document.getElementById("result-title").style.color = "#ff4444";
  document.getElementById("result-text").innerHTML = `Your message "${message}" is now visible to the server and hackers.<br><br>Centralized risk: 0% Privacy`;
  document.getElementById("privacy-score").textContent = "0%";
  document.getElementById("privacy-score").style.color = "#ff4444";
  document.getElementById("call-to-action").textContent = "Switch to Luffa for real protection!";
  result.style.background = "rgba(255, 68, 68, 0.15)";
}

function simulateSafe() {
  const message = document.getElementById("message").value.trim() || "Your secret message";
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  document.getElementById("result-title").textContent = "Luffa Privacy Protected!";
  document.getElementById("result-title").style.color = "#00cc88";
  document.getElementById("result-text").innerHTML = `Your message "${message}" is fully encrypted end-to-end.<br><br>No one (not even Luffa) can read it. Relay nodes keep it decentralized.`;
  document.getElementById("privacy-score").textContent = "100%";
  document.getElementById("privacy-score").style.color = "#00cc88";
  document.getElementById("call-to-action").textContent = "Your privacy is safe with Endless!";
  result.style.background = "rgba(0, 204, 136, 0.15)";
}
