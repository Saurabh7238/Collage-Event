// Sample event sections
const sections = [
  { title: "🎶 Music Fest", description: "Enjoy live bands, DJs, and cultural performances!" },
  { title: "💡 Tech Expo", description: "Showcase of innovative projects and competitions." },
  { title: "🏆 Sports Meet", description: "Exciting tournaments and friendly matches." },
  { title: "🎨 Art Gallery", description: "Student artworks, crafts, and exhibitions." },
  { title: "📚 Workshops", description: "Hands-on learning sessions with experts." }
];

// Render sections as cards
const container = document.getElementById("sections-container");

sections.forEach(sec => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${sec.title}</h2>
    <p>${sec.description}</p>
  `;
  container.appendChild(card);
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
