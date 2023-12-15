/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
const hash = new Map(paths);
  return [...hash.values()].find(dist => !hash.has(dist));
};