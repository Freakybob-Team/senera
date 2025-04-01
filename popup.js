const popup = document.querySelector('.mcafeepopup');

function mcafeepopup() {
    popup.style.display = 'flex';
}

document.getElementById('enablenow').addEventListener('click', () => {
    alert('HAPPY APRIL FOOLS!!!');
    popup.style.display = 'none';
});