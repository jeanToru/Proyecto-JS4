import { getDistance, getContext } from './util.js';

class Particle {
    constructor(x, y, radio, color) {
        this.color = color || '#000';
        this.x = x;
        this.y = y;
        this.radio = radio || 1;
        this.distanceX = Math.random() - 0.5;
        this.distanceY = Math.random() - 0.5;
    }
    draw() {
        const ctx = getContext();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    update(array = []) {

        for (let i = 0; i < array.length; i++) {
            let distance = getDistance(this, array[i]);
            if (distance < 100) {
                const ctx = getContext();
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(array[i].x, array[i].y);
                ctx.lineWidth = .1;
                ctx.strokeStyle = '#000';
                ctx.stroke();
                ctx.closePath();
            }

        }

        if (this.y + this.radio > canvas.height || this.y - this.radio < 0) this.distanceY = -this.distanceY
        if (this.x + this.radio > canvas.width || this.x - this.radio < 0) this.distanceX = -this.distanceX

        this.x += this.distanceX;
        this.y += this.distanceY;
        this.draw();
    }
}

export default Particle;