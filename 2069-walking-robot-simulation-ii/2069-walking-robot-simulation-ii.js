var Robot = function(width, height) {
    this.w = width - 1;
    this.h = height - 1;
    this.perimeter = 2 * (this.w + this.h);
    this.pos = 0;
    this.moved = false;
};

Robot.prototype.step = function(num) {
    this.moved = true;
    this.pos = (this.pos + num) % this.perimeter;
};

Robot.prototype.getPos = function() {
    if (this.pos <= this.w) {
        return [this.pos, 0];
    } else if (this.pos <= this.w + this.h) {
        return [this.w, this.pos - this.w];
    } else if (this.pos <= 2 * this.w + this.h) {
        return [this.w - (this.pos - (this.w + this.h)), this.h];
    } else {
        return [0, this.h - (this.pos - (2 * this.w + this.h))];
    }
};

Robot.prototype.getDir = function() {
    if (this.pos === 0) {
        return this.moved ? "South" : "East";
    } else if (this.pos <= this.w) {
        return "East";
    } else if (this.pos <= this.w + this.h) {
        return "North";
    } else if (this.pos <= 2 * this.w + this.h) {
        return "West";
    } else {
        return "South";
    }
};