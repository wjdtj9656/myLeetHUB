var deleteDuplicateFolder = function(paths) {
    class TreeNode {
        constructor() {
            this.serializedRepresentation = "";
            this.childrenMap = new Map();
        }
    }

    const rootNode = new TreeNode();

    for (const folderList of paths) {
        let currentNode = rootNode;
        for (const segment of folderList) {
            if (!currentNode.childrenMap.has(segment)) {
                currentNode.childrenMap.set(segment, new TreeNode());
            }
            currentNode = currentNode.childrenMap.get(segment);
        }
    }

    const serializationCount = new Map();

    function serializeTree(treeNode) {
        if (treeNode.childrenMap.size === 0) return;
        const serializedParts = [];
        for (const [name, childNode] of treeNode.childrenMap) {
            serializeTree(childNode);
            serializedParts.push(`${name}(${childNode.serializedRepresentation})`);
        }
        serializedParts.sort();
        treeNode.serializedRepresentation = serializedParts.join("");
        serializationCount.set(
            treeNode.serializedRepresentation,
            (serializationCount.get(treeNode.serializedRepresentation) || 0) + 1
        );
    }
    serializeTree(rootNode);

    const resultPaths = [];
    const tempPath = [];

    function collectUniquePaths(treeNode) {
        if ((serializationCount.get(treeNode.serializedRepresentation) || 0) > 1) return;
        if (tempPath.length > 0) {
            resultPaths.push([...tempPath]);
        }
        for (const [name, childNode] of treeNode.childrenMap) {
            tempPath.push(name);
            collectUniquePaths(childNode);
            tempPath.pop();
        }
    }
    collectUniquePaths(rootNode);

    return resultPaths;
};
