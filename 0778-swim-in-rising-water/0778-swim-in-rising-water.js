function swimInWater(grid) {
  const n = grid.length
  let lo = grid[0][0], hi = n * n - 1
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
  const can = t => {
    if (grid[0][0] > t) return false
    const vis = Array.from({length:n}, () => Array(n).fill(false))
    const qx = new Array(n*n), qy = new Array(n*n)
    let h = 0, tI = 0
    qx[tI] = 0; qy[tI] = 0; tI++
    vis[0][0] = true
    while (h < tI) {
      const x = qx[h], y = qy[h]; h++
      if (x === n - 1 && y === n - 1) return true
      for (const [dx, dy] of dirs) {
        const nx = x + dx, ny = y + dy
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && !vis[nx][ny] && grid[nx][ny] <= t) {
          vis[nx][ny] = true
          qx[tI] = nx; qy[tI] = ny; tI++
        }
      }
    }
    return false
  }
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (can(mid)) hi = mid
    else lo = mid + 1
  }
  return lo
}
