const generateTreeGraph = () => {
  // User inputs
  const userInputs = [
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 2, 0, 3, 0, 0],
    [0, 0, 1, 0, 1, 0, 3, 0, 1],
  ];

  // Root node of the tree
  const rootNode = {};

  // Get the number of levels in the tree
  const numLevels = userInputs.length;

  // Loop through each level
  for (let i = 0; i < numLevels; i++) {
    const levelInput = userInputs[i];
    const numNodes = levelInput.length;

    // Initialize node array for this level
    const levelNodes = [];

    // Loop through each answer in the level input
    for (let j = 0; j < numNodes; j++) {
      const answer = levelInput[j];
      if (answer !== 0) {
        // Create a new node with the corresponding answer value
        const node = { value: answer };
        levelNodes.push(node);
      } else {
        // Push a null value to represent a missing node
        levelNodes.push(null);
      }
    }

    // Set the node array as the children of the parent node of the previous level
    if (i > 0) {
      const parentNodes = rootNode[`level${i - 1}`];
      parentNodes.forEach((parentNode, index) => {
        if (parentNode !== null) {
          if (!parentNode.children) {
            parentNode.children = [];
          }
          parentNode.children.push(
            levelNodes
              .slice(index * 2, index * 2 + 2)
              .filter((node) => node !== null)
          );
        }
      });
    }

    // Set the node array as the root node if this is the first level
    if (i === 0) {
      rootNode[`level${i}`] = levelNodes;
    } else {
      rootNode[`level${i}`] = [];
    }
  }

  console.log(JSON.stringify(rootNode));
};

export default generateTreeGraph;
