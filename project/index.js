

document.addEventListener('DOMContentLoaded', () => {
    const footerItems = document.querySelectorAll('.footer-content p, .footer-content a');
    footerItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#e74c3c'; // Change color on hover
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '#000'; // Change color back on mouse out
        });
    });

    // Dropdown menu functionality
    const dropdownIcons = document.querySelectorAll('.dropdown-icon');
    dropdownIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            const parent = icon.parentElement.parentElement;
            parent.classList.toggle('active');
            event.stopPropagation();
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-icon') && !event.target.closest('.dropdown-content')) {
            dropdownIcons.forEach(icon => {
                const parent = icon.parentElement.parentElement;
                parent.classList.remove('active');
            });
        }
    });
});
