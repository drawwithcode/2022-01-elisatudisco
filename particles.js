function Particle() {
    this.pos = createVector(random(width), random(height)); //I create a particle with a random position in the space 
    this.vel = createVector(0,0); //speed and acceleration start from 0
    this.acc = createVector(0,0);
    this.maxspeed = 4; //maximum speed. It is used to prevent particles from going too fast 

    this.update = function(){
        this.vel.add(this.acc); //I add the acceleration to the speed 
        this.vel.limit(this.maxspeed); //the maximum speed is 4 
        this.pos.add(this.vel);  //I add the current velocity to the current position
        this.acc.mult(0); //acceleration starts from 0
    }

    this.follow = function(vectors) {
        let x = floor(this.pos.x / scl); //in this way I discover where the particle is located and which vector it is following 
        let y = floor(this.pos.y / scl);
        let index = x + y * cols; 
        let force = vectors[index]; //this variable corresponds to the closest vector to the position of the particle 
        this.applyForce(force);
    }

    this.applyForce = function(force){
        this.acc.add(force);
    }
    //many particles go on the same vectors and create the colorful lines
    this.show = function(){
        stroke(color('rgba(52, 162, 191, 0.1)'));
        strokeWeight(3);
        point(this.pos.x, this.pos.y);
    }

    this.edges = function(){ //pacman effect: it is used to prevent particles from getting out of the screen  
       
        if(this.pos.x > width){
            this.pos.x = 0;
        }
        if(this.pos.x < 0) {
            this.pos.x = width;
        }
        if(this.pos.y > height) {
            this.pos.y = 0;
        }
        if(this.pos.y < 0) {
            this.pos.y = height;
        }
    }
}