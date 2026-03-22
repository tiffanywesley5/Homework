// Bonus: Add content with JavaScript DOM methods
const contactSection = document.getElementById("contact");

const contactForm = document.createElement("div");
contactForm.innerHTML = `
  <p><strong>Email:</strong> tiffany@beautybizbasics.com</p>
  <p><strong>Follow us:</strong></p>
`;

const socialList = document.createElement("ul");
const socials = ["Instagram", "TikTok", "Substack"];

for (let social of socials) {
  const li = document.createElement("li");
  li.textContent = social;
  socialList.appendChild(li);
}

contactSection.appendChild(contactForm);
contactSection.appendChild(socialList);
