import p5 from 'p5';

const n = 7;
let d = 29;
let dSlider;

const sketch = p => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.angleMode(p.DEGREES);
        dSlider = p.createSlider(1, 180, 1);
    };
    
    p.draw = () => {
        d = dSlider.value();
        p.background(0);
        p.translate(p.width/2, p.height/2);
        p.stroke(255);
        p.strokeWeight(1);
        p.noFill();
        
        p.beginShape();
        for(let i = 0; i < 361; i++) {
            let k = i * d;
            let r = 150 * p.sin(n * k);
            let x = r * p.cos(k);
            let y = r * p.sin(k);
            p.vertex(x, y);
        }
        p.endShape();

        p.noFill();
        p.stroke(255,0,0);
        p.strokeWeight(3);
        p.beginShape();
        for(let i = 0; i < 361; i++) {
            let k = i;
            let r = 150 * p.sin(n * k);
            let x = r * p.cos(k);
            let y = r * p.sin(k);
            p.vertex(x, y);
        }
        p.endShape();
    }
};

const s = new p5(sketch);