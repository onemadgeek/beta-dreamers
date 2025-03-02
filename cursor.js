document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-glow');
    if (!cursor) return;
    
    // Add smooth animation
    cursor.style.transition = 'all 0.1s ease';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hide cursor glow when leaving window
document.addEventListener('mouseout', () => {
    const cursor = document.querySelector('.cursor-glow');
    if (cursor) {
        cursor.style.opacity = '0';
    }
});

document.addEventListener('mouseover', () => {
    const cursor = document.querySelector('.cursor-glow');
    if (cursor) {
        cursor.style.opacity = '1';
    }
}); 