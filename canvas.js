

var canvas = document.querySelector('#canvas1');
//console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// drawing 
c.fillStyle = 'rgba(0,0,255, 0.5)';


c.beginPath();
c.arc(200, 300, 30, 0, Math.PI*2, false);
c.strokeStyle = 'rgba(255,0,255, 1)';
c.stroke()

for(let i=0; i<1000; ++i) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    c.beginPath();
    c.arc(x,y, 30, 0, Math.PI*2, false);
    c.strokeStyle = `rgba(${r},${g},${b}, 1)`;
    c.stroke()
}


