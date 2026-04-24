var furthestDistanceFromOrigin = function (moves) {
    let lCount = 0;
    let rCount = 0;
    let underscoreCount = 0;

    for (let char of moves) {
      if (char === "L") lCount++;
      else if (char === "R") rCount++;
      else underscoreCount++;
    }

    return Math.abs(lCount - rCount) + underscoreCount;
  };