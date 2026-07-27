const facts = [
  "My favorite sport is basketball.",
  "I enjoy building coding projects.",
  "I like watching movies.",
  "I'm learning HTML, CSS, and JavaScript.",
  "I like trying new technology."
];

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").textContent = facts[randomIndex];
}