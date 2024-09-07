const MOD = 10**9 +7;
function colorTheGrid(m, n) {
    
    const arr = validArr(m);
    const adj = adjArr(arr,m);

    let dp = new Array(arr.length).fill(1);

    for(let col=1; col<n; col++){
        const nDp = new Array(arr.length).fill(0);
        for(let i=0; i<arr.length; i++){
            for(let j of adj[i]){
                nDp[i] = (nDp[i] + dp[j]) %MOD;
            }
        }
        dp = nDp;
    }
    return dp.reduce((a,b)=>(a+b)%MOD,0);
}

const validArr = (m) => {
    const arr = [];
    const colors =[0,1,2];
    const dfs = (parent) =>{
        if(parent.length >= m){
            console.log(parent)
            arr.push([...parent]);
            return;
        }
        for(let color of colors){
            if(parent.length == 0 || parent[parent.length-1] != color){
                parent.push(color);
                dfs(parent);
                parent.pop(color);
            }
        }
    }
    dfs([])
    return arr;
}

const adjArr = (arr,m) =>{
    const arr1  = new Array(arr.length).fill(0).map(()=>[]);
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(isValid(arr[i],arr[j],m)){
                arr1[i].push(j);
            }
        }
    }
    return arr1;
}

const isValid = (arr,arr2,m)=>{
    for(let i=0; i<m; i++){
        if(arr[i] == arr2[i]) return false;
    }
    return true;
}