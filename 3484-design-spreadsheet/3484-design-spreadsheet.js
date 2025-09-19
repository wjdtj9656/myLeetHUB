class Spreadsheet {
  constructor(rows) {
    this.rows = rows;
    this.data = new Map();
  }
  setCell(cell, value) {
    this.data.set(cell, value);
  }
  resetCell(cell) {
    this.data.delete(cell);
  }
  getValue(formula) {
    const [a, b] = formula.slice(1).split('+');
    return this._val(a) + this._val(b);
  }
  _val(x) {
    if (/^\d+$/.test(x)) return parseInt(x, 10);
    return this.data.get(x) ?? 0;
  }
}
