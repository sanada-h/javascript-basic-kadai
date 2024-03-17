const clickbtn =document.getElementById('btn');

clickbtn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
});
