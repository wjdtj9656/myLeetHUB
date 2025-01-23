var countServers = function(grid) {
    const set = new Set();
	const m = grid.length;
	const n = grid[0].length;
	for(let i=0; i<m; i++){
		const set2 = new Set();
		for(let j=0; j<n; j++){
			if(grid[i][j] == 1){
				set2.add(`${i}-${j}`);
			}
		}
		if(set2.size > 1){
			for(let str of set2){
				set.add(str);
			}
		}
	}
	for(let i=0; i<n; i++){
		const set2 = new Set();
		for(let j=0; j<m; j++){
			if(grid[j][i] == 1){
				set2.add(`${j}-${i}`);
			}
		}
		if(set2.size > 1){
			for(let str of set2){
				set.add(str);
			}
		}
	}
	return set.size;
};