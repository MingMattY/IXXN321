const dropDown = document.getElementById('dropdown');
const dropButton = document.getElementById('dropbtn');
const bgd = document.getElementById('bgd');

dropDown.style.visibility = 'hidden';

dropButton.addEventListener('mouseover', () => {
    dropDown.style.visibility = 'visible';
    dropButton.style.color = 'white';
    dropButton.style.backgroundColor = 'black';
    dropButton.style.opacity = '90%';
});

bgd.addEventListener('mouseover', () => {
    dropDown.style.visibility = 'hidden';
    dropButton.style.color = 'black';
    dropButton.style.backgroundColor = 'white';
});