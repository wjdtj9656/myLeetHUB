function countDays(days, meetings) {
    const changes = new Map();

    for (const [start, end] of meetings) {
        changes.set(start, (changes.get(start) || 0) + 1);
        changes.set(end + 1, (changes.get(end + 1) || 0) - 1);
    }

    const points = Array.from(changes.keys()).sort((a, b) => a - b);

    let current = 0;
    let prev = 1;
    let meetingDays = 0;

    for (const point of points) {
        if (point > days + 1) break;

        if (current > 0) {
            meetingDays += point - prev;         }

        current += changes.get(point);
        prev = point;
    }

    return days - meetingDays;
}