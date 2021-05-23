const playbtn = document.getElementById('playbtn');
const playbtn2 = document.getElementById('playbtn2');
const border = document.getElementById('musiclistwidth');
const border2 = document.getElementById('musiclistwidth2');
const weight = document.getElementById('weightchange');


playbtn.addEventListener('mouseover', () => {
    playbtn.style.backgroundColor = 'white';
    playbtn.style.color = '#008060';
    playbtn.style.border = '1px solid #00b386';
    playbtn.style.transition = '0.25s cubic-bezier(0.47, 0, 0.745, 0.715)';
    border.style.border = '2px solid #00b386'
    border.style.color = 'white'
    border.style.backgroundColor = '#00b386'
    border.style.transition = '0.5s cubic-bezier(0.42, 0, 0.58, 1.0)'
});

playbtn.addEventListener('mouseout', () => {
    playbtn.style.backgroundColor = 'white';
    playbtn.style.color = 'black';
    playbtn.style.border = '1px solid black';
    border.style.color = 'black';
    border.style.border = '2px solid white'
    border.style.backgroundColor = 'white'
    border.style.transition = '0.5s cubic-bezier(0.42, 0, 0.58, 1.0)'
});

playbtn2.addEventListener('mouseover', () => {
    playbtn2.style.backgroundColor = 'white';
    playbtn2.style.color = '#008ae6';
    playbtn2.style.border = '1px solid #008ae6';
    playbtn2.style.transition = '0.25s cubic-bezier(0.47, 0, 0.745, 0.715)';
    border2.style.border = '2px solid #008ae6'
    border2.style.color = 'white'
    border2.style.backgroundColor = '#008ae6'
    border2.style.transition = '0.5s cubic-bezier(0.42, 0, 0.58, 1.0)'
});

playbtn2.addEventListener('mouseout', () => {
    playbtn2.style.backgroundColor = 'white';
    playbtn2.style.color = 'black';
    playbtn2.style.border = '1px solid black';
    border2.style.color = 'black';
    border2.style.border = '2px solid white'
    border2.style.backgroundColor = 'white'
    border2.style.transition = '0.5s cubic-bezier(0.42, 0, 0.58, 1.0)'
});
