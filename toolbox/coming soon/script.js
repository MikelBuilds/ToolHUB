document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    // Create trail effect
    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);

    // Remove the trail after animation ends
    setTimeout(() => {
        trail.remove();
    }, 1000);
});
