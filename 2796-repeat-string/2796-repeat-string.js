String.prototype.replicate = function(times) {
    let repl = '';
    for (let i = 0; i < times; i++) repl += this;
    return repl;
}