function findXSum(nums, k, x) {
    const n = nums.length;
    const res = new Array(n - k + 1);
    if (k === 0) return res;
    const OFFSET = 1e10;

    function makeKey(freq, val) {
        return freq * OFFSET + val;
    }

    function decodeKey(key) {
        const freq = Math.floor(key / OFFSET);
        const val = key - freq * OFFSET;
        return { freq, val };
    }

    function Node(key) {
        this.key = key;
        this.pri = Math.random();
        this.left = null;
        this.right = null;
    }

    function split(root, key) {
        if (!root) return [null, null];
        if (key <= root.key) {
            const s = split(root.left, key);
            root.left = s[1];
            return [s[0], root];
        } else {
            const s = split(root.right, key);
            root.right = s[0];
            return [root, s[1]];
        }
    }

    function merge(a, b) {
        if (!a || !b) return a || b;
        if (a.pri < b.pri) {
            a.right = merge(a.right, b);
            return a;
        } else {
            b.left = merge(a, b.left);
            return b;
        }
    }

    function insert(root, node) {
        if (!root) return node;
        if (node.pri < root.pri) {
            if (node.key < root.key) root.left = insert(root.left, node);
            else root.right = insert(root.right, node);
            return root;
        } else {
            const s = split(root, node.key);
            node.left = s[0];
            node.right = s[1];
            return node;
        }
    }

    function erase(root, key) {
        if (!root) return null;
        if (key < root.key) {
            root.left = erase(root.left, key);
            return root;
        }
        if (key > root.key) {
            root.right = erase(root.right, key);
            return root;
        }
        return merge(root.left, root.right);
    }

    function getMin(root) {
        if (!root) return null;
        while (root.left) root = root.left;
        return root;
    }

    function getMax(root) {
        if (!root) return null;
        while (root.right) root = root.right;
        return root;
    }

    let rootIn = null;
    let rootOut = null;
    let sizeIn = 0;
    let sizeOut = 0;
    let sumIn = 0;

    const freq = new Map();
    const loc = new Map();

    function insertOutKey(key) {
        rootOut = insert(rootOut, new Node(key));
        sizeOut++;
    }

    function insertInKey(key) {
        rootIn = insert(rootIn, new Node(key));
        sizeIn++;
    }

    function promoteLargestOut() {
        if (!rootOut) return;
        const node = getMax(rootOut);
        const key = node.key;
        rootOut = erase(rootOut, key);
        sizeOut--;
        const { freq: f, val: v } = decodeKey(key);
        insertInKey(key);
        sumIn += v * f;
        loc.set(v, "in");
    }

    function demoteSmallestIn() {
        if (!rootIn) return;
        const node = getMin(rootIn);
        const key = node.key;
        rootIn = erase(rootIn, key);
        sizeIn--;
        const { freq: f, val: v } = decodeKey(key);
        sumIn -= v * f;
        insertOutKey(key);
        loc.set(v, "out");
    }

    function rebalance() {
        const total = sizeIn + sizeOut;
        const target = Math.min(x, total);

        while (sizeIn < target && sizeOut > 0) {
            promoteLargestOut();
        }
        while (sizeIn > target) {
            demoteSmallestIn();
        }

        while (sizeIn > 0 && sizeOut > 0) {
            const minInNode = getMin(rootIn);
            const maxOutNode = getMax(rootOut);
            if (!minInNode || !maxOutNode) break;
            if (maxOutNode.key <= minInNode.key) break;

            const minKey = minInNode.key;
            const maxKey = maxOutNode.key;

            rootIn = erase(rootIn, minKey);
            sizeIn--;
            rootOut = erase(rootOut, maxKey);
            sizeOut--;

            const a = decodeKey(minKey);
            const b = decodeKey(maxKey);

            sumIn -= a.val * a.freq;
            sumIn += b.val * b.freq;

            insertInKey(maxKey);
            insertOutKey(minKey);

            loc.set(a.val, "out");
            loc.set(b.val, "in");
        }
    }

    function updateValue(val, delta) {
        const oldFreq = freq.get(val) || 0;
        const newFreq = oldFreq + delta;

        if (oldFreq > 0) {
            const oldKey = makeKey(oldFreq, val);
            const where = loc.get(val);
            if (where === "in") {
                rootIn = erase(rootIn, oldKey);
                sizeIn--;
                sumIn -= val * oldFreq;
            } else if (where === "out") {
                rootOut = erase(rootOut, oldKey);
                sizeOut--;
            }
        }

        if (newFreq === 0) {
            freq.delete(val);
            loc.delete(val);
        } else {
            freq.set(val, newFreq);
            const newKey = makeKey(newFreq, val);
            insertOutKey(newKey);
            loc.set(val, "out");
        }

        rebalance();
    }

    for (let i = 0; i < k; i++) {
        updateValue(nums[i], 1);
    }
    res[0] = sumIn;

    for (let i = k; i < n; i++) {
        updateValue(nums[i - k], -1);
        updateValue(nums[i], 1);
        res[i - k + 1] = sumIn;
    }

    return res;
}
