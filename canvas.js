

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

let mouse = {
    x:-1000,
    y:-1000,
};

function Circle() {
    this.x = rand(0, innerWidth);
    this.y = rand(0, innerHeight);
    this.dx = rand(1, 3);
    this.dy = rand(1, 3);
    this.radius = rand(5,60);
    let r = rand(0,255); // [0,255]
    let g = rand(0,255);
    let b = rand(0,255);
    this.color = `rgba(${r},${g},${b}, 1)`;
    this.fill = `rgba(${r},${g},${b}, ${rand(0.3, 0.8)})`;

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
        if (this.x > canvas.width-this.radius && this.dx > 0) this.dx = -this.dx;
        if (this.x < this.radius && this.dx < 0) this.dx = -this.dx;
        if (this.y > canvas.height-this.radius && this.dy > 0) this.dy = -this.dy;
        if (this.y < this.radius && this.dy < 0) this.dy = -this.dy;

        // interact with mouse
        if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
            this.radius += 1;
            if (this.radius > 200)
                this.radius = 200;
        }
        else {
            this.radius -= 1;
            if (this.radius < 2) 
                this.radius = 2;
        }
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
        for(let i=0; i<500; ++i)
            circles.push(new Circle());
    }
    requestAnimationFrame(animate);

    c.clearRect(0,0, canvas.width, canvas.height);
    for(let c of circles) {
        c.draw();
        c.update();
    }
    //bouncing();
}


window.addEventListener('mousemove', (event)=>{
    // console.log(event);
    if (event.buttons == 1) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    }
    else {
        mouse.x = mouse.y = -1000;
    }
});
animate();