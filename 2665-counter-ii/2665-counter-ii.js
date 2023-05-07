/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function(init) {
//     let cnt = init;
//     return {
//         increment: () => ++cnt,
//         decrement: () => --cnt,
//         reset: () => cnt = init,
//     }
// };
// var createCounter = function(init) {
//     let cnt = init;
//     const increment = () => ++cnt;
//     const decrement = () => --cnt;
//     const reset = () => cnt = init;
//     return {increment, decrement, reset};
// };
class Counter{
    constructor(init){
        this.init = init;
        this.cnt = init;
    }
    increment(){
        this.cnt += 1;
        return this.cnt;
    }
    decrement(){
        this.cnt -= 1;
        return this.cnt;
    }
    reset(){
        this.cnt = this.init;
        return this.cnt;
    }   
}
const createCounter = (init) =>{
    return new Counter(init);
}