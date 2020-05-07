
function ns_canvas() {
    let canvas = document.querySelector('#canvas1') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d') as CanvasRenderingContext2D;

    // drawing 
    c.fillStyle = 'rgba(0,0,255, 0.5)';


    c.beginPath();
    c.arc(200, 300, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'rgba(255,0,255, 1)';
    c.stroke()

    function draw_random_circle() {


        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let r = Math.random() * 255; // [0,255]
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2, false);
        c.strokeStyle = `rgba(${r},${g},${b}, 1)`;
        c.stroke()
    }


    function rand(s: number, e: number) {  // [s,e]
        return Math.random() * (e - s + 1) + s;
    }

    let mouse = {
        x: -1000,
        y: -1000,
    };

    class Circle {
        private x: number;
        private y: number;
        private dx: number;
        private dy: number;
        private radius: number;
        private color: string;
        private fill: string;

        constructor() {
            this.x = rand(0, innerWidth);
            this.y = rand(0, innerHeight);
            this.dx = rand(1, 3);
            this.dy = rand(1, 3);
            this.radius = rand(5, 60);
            let r = rand(0, 255); // [0,255]
            let g = rand(0, 255);
            let b = rand(0, 255);
            this.color = `rgba(${r},${g},${b}, 1)`;
            this.fill = `rgba(${r},${g},${b}, ${rand(0.3, 0.8)})`;
        }

        draw(): void {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = this.color;
            c.stroke();
            c.fillStyle = this.fill;
            c.fill();

        };

        update() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > canvas.width - this.radius && this.dx > 0) this.dx = -this.dx;
            if (this.x < this.radius && this.dx < 0) this.dx = -this.dx;
            if (this.y > canvas.height - this.radius && this.dy > 0) this.dy = -this.dy;
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

    let x: number = 0;
    let y: number = 0;
    let dx: number = 5;
    let dy: number = 5;

    function bouncing() {
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        let r = Math.random() * 255; // [0,255]
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        c.beginPath();
        const radius = 30;
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = `rgba(${r},${g},${b}, 1)`;
        c.stroke()
        x += dx;
        y += dy;
        if (x > window.innerWidth - radius && dx > 0) dx = -dx;
        if (x < radius && dx < 0) dx = -dx;
        if (y > window.innerHeight - radius && dy > 0) dy = -dy;
        if (y < radius && dy < 0) dy = -dy;
    }

    let canvas_bg: HTMLImageElement | null = null;
    let dst_width: number = 0;
    let dst_height: number = 0;
    let circles: Circle[] = [];

    function animate() {
        if (circles.length == 0) {
            for (let i = 0; i < 500; ++i)
                circles.push(new Circle());

            if (typeof c.filter === "undefined") {
                alert("Sorry, the browser doesn't support Context2D filters.")
            }
            console.log(c.imageSmoothingQuality);
            if (c.imageSmoothingQuality)
                c.imageSmoothingQuality = 'high';
        }
        requestAnimationFrame(animate);

        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(canvas_bg as HTMLImageElement, 0, 0, canvas_bg!.width, canvas_bg!.height, 0, 0, dst_width, dst_height); // fit.

        for (let c of circles) {
            c.draw();
            c.update();
        }
        //bouncing();
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (canvas_bg) {
            let imageRatio = canvas_bg!.width / canvas_bg!.height;
            let canvasRatio = canvas.width / canvas.height;
            if (imageRatio > canvasRatio) {
                dst_width = canvas.width;
                dst_height = canvas.width / imageRatio;
            }
            else {
                dst_width = canvas.height * imageRatio;
                dst_height = canvas.height;
            }
        }
    }
    window.addEventListener("resize", resize);

    window.addEventListener('mousemove', (event) => {
        // console.log(event);
        if (event.buttons == 1) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        }
        else {
            mouse.x = mouse.y = -1000;
        }
    });

    canvas_bg = new Image(); // Using optional size for image
    canvas_bg.src = 'images/screenshot.jpg';
    resize();
    animate();
};

ns_canvas();