const option = document.getElementById('option');
const next = document.getElementById('next');

option.addEventListener('click', () => {
    if(option.style.color = 'inherit'){
    option.style.border = '2px solid white';
    option.style.color = 'white';
    option.style.background = 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 50%, #c2e9fb 100%)';
    } else {
        option.style.border = '2px solid black';
        option.style.color = 'inherit';
        option.style.backgroundColor = 'white';
    }
});

option.addEventListener('click', () => {
    next.style.opacity = '1';
    next.style.transition = 'opacity 0.5s linear';
    next.style.visibility = 'visible';
    next.style.color = 'white';
    next.style.opacity = '90%';
    next.style.backgroundColor = 'black';
});
