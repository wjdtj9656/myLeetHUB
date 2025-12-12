function countMentions(numberOfUsers, events) {
    const n = numberOfUsers;
    const sorted = events.slice().sort((a, b) => {
        const ta = Number(a[1]);
        const tb = Number(b[1]);
        if (ta !== tb) return ta - tb;
        if (a[0] === b[0]) return 0;
        return a[0] === "OFFLINE" ? -1 : 1;
    });

    const mentions = new Array(n).fill(0);
    const isOnline = new Array(n).fill(true);
    const offlineUntil = new Array(n).fill(0);

    for (const e of sorted) {
        const t = Number(e[1]);

        for (let i = 0; i < n; i++) {
            if (!isOnline[i] && offlineUntil[i] <= t) {
                isOnline[i] = true;
            }
        }

        if (e[0] === "OFFLINE") {
            const id = Number(e[2]);
            if (id >= 0 && id < n) {
                isOnline[id] = false;
                offlineUntil[id] = t + 60;
            }
        } else {
            const text = e[2].trim();
            if (!text) continue;
            const tokens = text.split(/\s+/);

            for (const token of tokens) {
                if (token === "ALL") {
                    for (let i = 0; i < n; i++) {
                        mentions[i]++;
                    }
                } else if (token === "HERE") {
                    for (let i = 0; i < n; i++) {
                        if (isOnline[i]) mentions[i]++;
                    }
                } else if (token.startsWith("id")) {
                    const id = Number(token.slice(2));
                    if (id >= 0 && id < n) {
                        mentions[id]++;
                    }
                }
            }
        }
    }

    return mentions;
}
