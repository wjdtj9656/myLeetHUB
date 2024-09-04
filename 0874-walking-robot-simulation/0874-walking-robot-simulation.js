	/**
	 * @param {number[]} commands
	 * @param {number[][]} obstacles
	 * @return {number}
	 */
     var robotSim = function(commands, obstacles) {
		const dx = [-1,0,1,0];
		const dy = [0,1,0,-1];
		let dir = 1;
		let cx = 0;
		let cy = 0;
		let ans = 0;
        const set = new Set();
        for(let i=0; i<obstacles.length; i++){
            const [x,y] = obstacles[i];
            set.add(`${x}-${y}`);
        }
		const searchO = (x,y) =>{
            if(set.has(`${x}-${y}`)) return true;
			return false;
		}
		for(let command of commands) {
			if(command == -2){
				dir -=1;
				if(dir < 0) dir = 3;
			}
			else if(command == -1){
				dir +=1;
				dir %=4;
			}
			else{
				while(command > 0){
					let nx = cx + dx[dir];
					let ny = cy + dy[dir];
					if(searchO(nx,ny)){
                        break;
					}
					cx = nx;
					cy = ny;
					command--;
				}
			}
			ans = Math.max(ans,cx**2 + cy**2);
		}
		return ans;
	};