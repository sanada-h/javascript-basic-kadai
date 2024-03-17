const clickbtn =document.getElementById('btn');

clickbtn.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('text').innerHTML = 'ボタンをクリックしました';
    },2000);
});