const lowerbtn = document.getElementById('lowerbutton');
const lowerbtn2 = document.getElementById('lowerbutton2');
const topbtn = document.getElementById('readbutton');

lowerbtn.addEventListener('mouseover', () => {
    lowerbtn.style.backgroundColor= 'black';
    lowerbtn.style.color = 'white';
    lowerbtn.style.transition = 'border-radius 1s cubic-bezier(0.47, 0, 0.745, 0.715)';
    lowerbtn.style.borderRadius= '50px';
});

lowerbtn.addEventListener('mouseout', () => {
    lowerbtn.style.backgroundColor= 'white';
    lowerbtn.style.color = 'black';
    lowerbtn.style.transition = 'border-radius 1.5s cubic-bezier(0.47, 0, 0.745, 0.715)';
    lowerbtn.style.borderRadius= '50px';
});

lowerbtn2.addEventListener('mouseover', () => {
    lowerbtn2.style.backgroundColor= 'rgb(80, 150, 200)';
    lowerbtn2.style.color = 'white';
    lowerbtn2.style.transition = 'border-radius 1s cubic-bezier(0.47, 0, 0.745, 0.715)';
    lowerbtn2.style.borderRadius= '50px';
});

lowerbtn2.addEventListener('mouseout', () => {
    lowerbtn2.style.backgroundColor= 'white';
    lowerbtn2.style.color = 'black';
    lowerbtn2.style.border = '5px solid white';
    lowerbtn2.style.transition = 'border-radius 1.5s cubic-bezier(0.47, 0, 0.745, 0.715)';
    lowerbtn2.style.borderRadius= '50px';
});

topbtn.addEventListener('mouseover', () => {
    topbtn.style.backgroundColor= 'rgb(10, 10, 10)';
    topbtn.style.color = 'white';
    topbtn.style.width = '400px';
    topbtn.style.transition = 'width 1s cubic-bezier(0.42, 0, 1.0, 1.0)';

});

topbtn.addEventListener('mouseout', () => {
    topbtn.style.backgroundColor= 'white';
    topbtn.style.color = 'black';
    topbtn.style.border = '2px solid black';
    topbtn.style.transition = 'width 0.5s cubic-bezier(0.42, 0, 0.58, 1.0)';
    topbtn.style.width = '100px';
});