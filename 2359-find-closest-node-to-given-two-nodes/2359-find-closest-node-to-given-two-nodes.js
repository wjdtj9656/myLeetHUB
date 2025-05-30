function closestMeetingNode(edges, node1, node2) {
  const n = edges.length;
  const dist1 = Array(n).fill(Infinity);
  const dist2 = Array(n).fill(Infinity);

  let cur = node1, d = 0;
  while (cur !== -1 && dist1[cur] === Infinity) {
    dist1[cur] = d++;
    cur = edges[cur];
  }

  cur = node2; d = 0;
  while (cur !== -1 && dist2[cur] === Infinity) {
    dist2[cur] = d++;
    cur = edges[cur];
  }

  let answer = -1;
  let bestMaxDist = Infinity;
  for (let i = 0; i < n; i++) {
    if (dist1[i] < Infinity && dist2[i] < Infinity) {
      const maxDist = Math.max(dist1[i], dist2[i]);
      if (maxDist < bestMaxDist) {
        bestMaxDist = maxDist;
        answer = i;
      }
    }
  }

  return answer;
}
