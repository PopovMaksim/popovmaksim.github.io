(function() {

    const properties = {
        spaceDiameter : 30,
        dotDiametr : 7,
        wavelength : 250,
        velocity : .017,
        displacement : 1
    }

    const canvas = document.getElementById('bg-home-page');
    const ctx = canvas.getContext('2d');

    let w = canvas.width = innerWidth;
    let h = canvas.height = innerHeight;

    let dotsList;

    window.onresize = function() {
        w = canvas.width = innerWidth;
        h = canvas.height = innerHeight;
        init();
    }

    class Dot {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = properties.dotDiametr / 2;
            this.scale = getDistance(x, y) / properties.wavelength;
        }

        update() {
            this.resize();
            this.draw();
        }

        resize() {
            this.scale = this.scale - properties.velocity;
        }

        draw() {
            let r = this.radius * (1 - Math.abs(Math.sin(this.scale)));
            ctx.beginPath();
            ctx.arc(this.x, this.y, r, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fillStyle = 'rgba(255, 255, 255, .1)';
            ctx.fill();
        }
    }

    function init() {
        dotsList = [];

        const dotsCountX = w / properties.spaceDiameter | 0;
        const dotsCountY = h / properties.spaceDiameter | 0;
        const startX = (properties.spaceDiameter + w - dotsCountX * properties.spaceDiameter) / 2;
        const startY = (properties.spaceDiameter + h - dotsCountY * properties.spaceDiameter) / 2;

        let displacement = properties.spaceDiameter / 4 * properties.displacement;
        
        for (let j = 0; j < dotsCountY; j++) {
            displacement = -displacement
            let y = startY + j * properties.spaceDiameter;
            for (let i = 0; i < dotsCountX; i++) {
                let x = startX + i * properties.spaceDiameter + displacement;
                dotsList.push(new Dot(x, y));
            }
        } 
    }

    function loop() {
        ctx.clearRect(0, 0, w, h)

        for (let a in dotsList) {
            dotsList[a].update();
        }

        requestAnimationFrame(loop);
    }

    function getDistance(x, y) {
        let dx = w / 2 - x;
        let dy = h / 2 - y;
        return Math.sqrt((dx * dx) + (dy * dy));
    }
    
    dotsList = [new Dot()];
    dotsList[0].draw();

    init();
    loop();

})();