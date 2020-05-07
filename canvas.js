

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

function draw_random_circle() {
    
    
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.random() * 255; // [0,255]
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    c.beginPath();
    c.arc(x,y, 30, 0, Math.PI*2, false);
    c.strokeStyle = `rgba(${r},${g},${b}, 1)`;
    c.stroke()
}


function rand(s,e) {  // [s,e]
    return Math.random()* (e-s+1) + s;
}

function Circle() {
    this.x = rand(0, innerWidth);
    this.y = rand(0, innerHeight);
    this.dx = rand(3, 8);
    this.dy = rand(3, 8);
    this.radius = rand(5,60);
    let r = rand(0,255); // [0,255]
    let g = rand(0,255);
    let b = rand(0,255);
    this.color = `rgba(${r},${g},${b}, 1)`;
    this.fill = `rgba(${r},${g},${b}, 0.5)`;

    this.draw = ()=>{
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI*2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.fillStyle = this.fill;
        c.fill();

    };

    this.update = ()=>{
        this.x += this.dx;
        this.y += this.dy;
        if (this.x > window.innerWidth-this.radius && this.dx > 0) this.dx = -this.dx;
        if (this.x < this.radius && this.dx < 0) this.dx = -this.dx;
        if (this.y > window.innerHeight-this.radius && this.dy > 0) this.dy = -this.dy;
        if (this.y < this.radius && this.dy < 0) this.dy = -this.dy;
    };
}

function bouncing() {
    c.clearRect(0,0, window.innerWidth, window.innerHeight);
    let r = Math.random() * 255; // [0,255]
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    c.beginPath();
    const radius = 30;
    c.arc(x,y, radius, 0, Math.PI*2, false);
    c.strokeStyle = `rgba(${r},${g},${b}, 1)`;
    c.stroke()
    x += dx;
    y += dy;
    if (x > window.innerWidth-radius && dx > 0) dx = -dx;
    if (x < radius && dx < 0) dx = -dx;
    if (y > window.innerHeight-radius && dy > 0) dy = -dy;
    if (y < radius && dy < 0) dy = -dy;
}

let circles = [];
function animate() {
    if (circles.length == 0)
    {
        for(let i=0; i<100; ++i)
            circles.push(new Circle());
    }
    requestAnimationFrame(animate);

    c.clearRect(0,0, window.innerWidth, window.innerHeight);
    for(let c of circles) {
        c.draw();
        c.update();
    }
    //bouncing();
}
animate();