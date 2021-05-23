const startCube = document.getElementById('startcube');
const secondCube = document.getElementById('secondcube');
const thirdCube = document.getElementById('thirdcube');
const lastCube = document.getElementById('lastcube');

const firstOne = document.getElementById('firstone');
const secondOne = document.getElementById('secondone');
const thirdOne = document.getElementById('thirdone');
const lastOne = document.getElementById('lastone');

firstOne.style.visibility = 'hidden';
secondOne.style.visibility = 'hidden';
thirdOne.style.visibility = 'hidden';
lastOne.style.visibility = 'hidden';

startCube.addEventListener('mouseover', () => {
    if(firstOne.style.visibility == 'hidden') {
        firstOne.style.visibility = 'visible';
        firstOne.style.transitionDelay = '0.1s';
        firstOne.style.backgroundColor = '#00cc7a'
        firstOne.style.color = 'white';
        startCube.style.opacity = '80%';
        firstOne.style.fontWeight = '500';
        startCube.style.backgroundColor = '#00cc7a';
        startCube.style.transition = '0.2s cubic-bezier(0.42, 0, 0.58, 1.0)';
    }
});

startCube.addEventListener('mouseout', () => {
    if(firstOne.style.visibility == 'visible') {
        firstOne.style.visibility = 'hidden';
        firstOne.style.transitionDelay = '0.1s';
        startCube.style.opacity = '30%';
        startCube.style.backgroundColor = 'white';
        startCube.style.transition = '0.2s cubic-bezier(0.42, 0, 0.58, 1.0)';
    }
});

secondCube.addEventListener('mouseover', () => {
    if(secondOne.style.visibility == 'hidden') {
        secondOne.style.visibility = 'visible';
        secondOne.style.transitionDelay = '0.1s';
        secondOne.style.backgroundColor = 'white'
        secondOne.style.color = 'black';
        secondOne.style.fontWeight = '500';
        secondCube.style.backgroundColor = 'white';
        secondCube.style.opacity = '100%';
        secondCube.style.transition = '0.2s cubic-bezier(0.42, 0, 0.58, 1.0)';
    }
});

secondCube.addEventListener('mouseout', () => {
    if(secondOne.style.visibility == 'visible') {
        secondOne.style.visibility = 'hidden';
        secondOne.style.transitionDelay = '0.1s';
        secondCube.style.opacity = '30%';
        secondCube.style.transition = '0.2s cubic-bezier(0.42, 0, 0.58, 1.0)';
    }
});

thirdCube.addEventListener('mouseover', () => {
    if(thirdOne.style.visibility == 'hidden') {
        thirdOne.style.visibility = 'visible';
        thirdOne.style.transitionDelay = '0.1s';
        thirdOne.style.backgroundColor = 'white'
        thirdOne.style.color = 'black';
        thirdOne.style.fontWeight = '500';
        thirdCube.style.backgroundColor = 'white';
        thirdCube.style.opacity = '100%';
        thirdCube.style.transition = '0.2s cubic-bezier(0.42, 0, 0.58, 1.0)';
    }
});

thirdCube.addEventListener('mouseout', () => {
    if(thirdOne.style.visibility == 'visible') {
        thirdOne.style.visibility = 'hidden';
        thirdOne.style.transitionDelay = '0.1s';
        thirdCube.style.opacity = '30%';
        thirdCube.style.transition = '0.2s cubic-bezier(0.42, 0, 0.58, 1.0)';
    }
});

lastCube.addEventListener('mouseover', () => {
    if(lastOne.style.visibility == 'hidden') {
        lastOne.style.visibility = 'visible';
        lastOne.style.transitionDelay = '0.1s';
        lastOne.style.backgroundColor = '#00bfff'
        lastOne.style.color = 'white';
        lastOne.style.fontWeight = '500';
        lastCube.style.backgroundColor = '#00bfff';
        lastCube.style.opacity = '100%';
        lastCube.style.transition = '0.2s cubic-bezier(0.42, 0, 0.58, 1.0)';
    }
});

lastCube.addEventListener('mouseout', () => {
    if(lastOne.style.visibility == 'visible') {
        lastOne.style.visibility = 'hidden';
        lastOne.style.transitionDelay = '0.1s';
        lastCube.style.backgroundColor = 'white';
        lastCube.style.opacity = '30%';
        lastCube.style.transition = '0.2s cubic-bezier(0.42, 0, 0.58, 1.0)';
    }
});