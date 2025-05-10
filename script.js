// Открытие/закрытие выпадающего меню
const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

profileBtn.addEventListener("click", () => {
    profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
});

// Закрытие меню при клике вне его
document.addEventListener("click", (e) => {
    if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
        profileDropdown.style.display = "none";
    }
});

// Переключение вкладок
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".content-section");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("data-content");

        sections.forEach(section => {
            if (section.id === target) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });

        profileDropdown.style.display = "none"; // закрыть меню после выбора
    });
});
