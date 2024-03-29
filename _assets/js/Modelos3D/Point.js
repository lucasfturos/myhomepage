export const pi = Math.PI;

export class Point {
    constructor(x, y, z, ctx) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.ctx = ctx
    }

    rotateX(amount) {
        let y = this.y;
        this.y = y * Math.cos(amount) + this.z * Math.sin(amount) * -1.0;
        this.z = y * Math.sin(amount) + this.z * Math.cos(amount);
    }
    
    rotateY(amount) {
        let x = this.x;
        this.x = x * Math.cos(amount) + this.z * Math.sin(amount) * -1.0;
        this.z = x * Math.sin(amount) + this.z * Math.cos(amount);
    }
    
    rotateZ(amount) {
        let x = this.x;
        this.x = x * Math.cos(amount) + this.y * Math.sin(amount) * -1.0;
        this.y = x * Math.sin(amount) + this.y * Math.cos(amount);
    }
    
    getProjection(distance, xy, offSet, offSetZ) {
        return (distance * xy) / (this.z - offSetZ) + offSet;
    }
    
    draw(x, y, color) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, 1.5, 0, 2 * pi, true);
        this.ctx.fill();
        this.ctx.restore();
    }
}