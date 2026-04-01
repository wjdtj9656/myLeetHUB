const survivedRobotsHealths = function(positions, healths, directions) {
    const n = positions.length;
    const robots = [];
    
    for (let i = 0; i < n; i++) {
        robots.push({
            id: i,
            pos: positions[i],
            health: healths[i],
            dir: directions[i]
        });
    }

    robots.sort((a, b) => a.pos - b.pos);
    const stack = [];

    for (let i = 0; i < n; i++) {
        let robot = robots[i];
        
        if (robot.dir === 'R') {
            stack.push(robot);
        } else {
            while (stack.length > 0 && stack[stack.length - 1].dir === 'R' && robot.health > 0) {
                let top = stack[stack.length - 1];
                
                if (top.health < robot.health) {
                    stack.pop();
                    robot.health -= 1;
                } else if (top.health === robot.health) {
                    stack.pop();
                    robot.health = 0;
                } else {
                    top.health -= 1;
                    robot.health = 0;
                }
            }
            
            if (robot.health > 0) {
                stack.push(robot);
            }
        }
    }

    return stack.sort((a, b) => a.id - b.id).map(r => r.health);
};