var MovieRentingSystem = function(n, entries) {
    function Heap(cmp){this.a=[];this.cmp=cmp;}
    Heap.prototype.size=function(){return this.a.length;};
    Heap.prototype.peek=function(){return this.a[0];};
    Heap.prototype.push=function(v){const a=this.a,c=this.cmp;a.push(v);let i=a.length-1;for(;i>0;){let p=(i-1)>>1;if(c(a[p],a[i])<=0)break;[a[p],a[i]]=[a[i],a[p]];i=p;}};
    Heap.prototype.pop=function(){const a=this.a,n=a.length;if(!n)return;const t=a[0],v=a[n-1];a.pop();if(n>1){a[0]=v;const c=this.cmp;let i=0;for(;;){let l=i*2+1,r=l+1,m=i;if(l<a.length&&c(a[l],a[m])<0)m=l;if(r<a.length&&c(a[r],a[m])<0)m=r;if(m===i)break;[a[i],a[m]]=[a[m],a[i]];i=m;}}return t;};

    this.price=new Map();
    this.avail=new Map();
    this.heap=new Map();
    this.inHeap=new Map();
    this.rented=new Set();
    this.rentedHeap=new Heap((x,y)=>x.price-y.price||x.shop-y.shop||x.movie-y.movie);

    for(const [shop,movie,price] of entries){
        const key=shop+"|"+movie;
        this.price.set(key,price);
        if(!this.heap.has(movie)){
            this.heap.set(movie,new Heap((x,y)=>x.price-y.price||x.shop-y.shop));
            this.avail.set(movie,new Set());
            this.inHeap.set(movie,new Set());
        }
        this.heap.get(movie).push({shop,price});
        this.avail.get(movie).add(shop);
        this.inHeap.get(movie).add(shop);
    }
};

MovieRentingSystem.prototype.search = function(movie) {
    const h=this.heap.get(movie), A=this.avail.get(movie), IH=this.inHeap.get(movie);
    if(!h) return [];
    const res=[], tmp=[];
    for(;;){
        while(h.size() && !A.has(h.peek().shop)){ IH.delete(h.peek().shop); h.pop(); }
        if(!h.size() || res.length===5) break;
        const x=h.pop();
        res.push(x.shop);
        tmp.push(x);
    }
    for(const x of tmp) h.push(x);
    return res;
};

MovieRentingSystem.prototype.rent = function(shop, movie) {
    const key=shop+"|"+movie;
    this.rented.add(key);
    this.avail.get(movie).delete(shop);
    this.rentedHeap.push({shop,movie,price:this.price.get(key)});
};

MovieRentingSystem.prototype.drop = function(shop, movie) {
    const key=shop+"|"+movie;
    this.rented.delete(key);
    const A=this.avail.get(movie), IH=this.inHeap.get(movie), h=this.heap.get(movie);
    A.add(shop);
    if(!IH.has(shop)){ h.push({shop,price:this.price.get(key)}); IH.add(shop); }
};

MovieRentingSystem.prototype.report = function() {
    const res=[], tmp=[];
    for(;;){
        while(this.rentedHeap.size()){
            const t=this.rentedHeap.peek();
            if(this.rented.has(t.shop+"|"+t.movie)) break;
            this.rentedHeap.pop();
        }
        if(!this.rentedHeap.size() || res.length===5) break;
        const x=this.rentedHeap.pop();
        res.push([x.shop,x.movie]);
        tmp.push(x);
    }
    for(const x of tmp) this.rentedHeap.push(x);
    return res;
};
