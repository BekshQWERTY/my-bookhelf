// JavaScript for profile dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    // Function to toggle dropdown visibility
    function toggleDropdown() {
        const isHidden = profileDropdown.hasAttribute('hidden');
        if (isHidden) {
            profileDropdown.removeAttribute('hidden');
            profileDropdown.classList.add('animate-fade-in'); // Add fade-in animation
            profileDropdown.classList.remove('opacity-0', 'scale-95'); // Show and scale up
            profileBtn.setAttribute('aria-expanded', 'true');
        } else {
            profileDropdown.classList.remove('animate-fade-in'); // Remove fade-in
            profileDropdown.classList.add('opacity-0', 'scale-95'); // Hide and scale down
            profileDropdown.addEventListener('transitionend', function handler() {
                profileDropdown.setAttribute('hidden', '');
                profileDropdown.removeEventListener('transitionend', handler);
            }, { once: true }); // Hide completely after animation
            profileBtn.setAttribute('aria-expanded', 'false');
        }
    }

    // Event listener for button click
    profileBtn.addEventListener('click', toggleDropdown);

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
            if (!profileDropdown.hasAttribute('hidden')) {
                profileDropdown.classList.remove('animate-fade-in');
                profileDropdown.classList.add('opacity-0', 'scale-95');
                profileDropdown.addEventListener('transitionend', function handler() {
                    profileDropdown.setAttribute('hidden', '');
                    profileDropdown.removeEventListener('transitionend', handler);
                }, { once: true });
                profileBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });
});
