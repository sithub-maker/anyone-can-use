document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const width = document.getElementById('widthInput').value;
        const height = document.getElementById('heightInput').value;
        const box = document.getElementById('block');

        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
    }
});
