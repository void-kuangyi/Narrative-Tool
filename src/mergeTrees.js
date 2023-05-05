const findNode = (tree, nodeName) => {
  const queue = [tree];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode.name === nodeName) {
      return currentNode;
    }
    if (currentNode.children) {
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.push(currentNode.children[i]);
      }
    }
  }
  return null;
};

const mergeTrees = (tree1, tree2) => {
  if (!tree2) {
    return tree1;
  }
  const node = findNode(tree1, tree2.name);

  if (!node) {
    tree1.children.push(tree2);
  } else {
    node.count = node.count + 1;
    if (node.type == "input") {
      node.comment = node.comment.concat(tree2.comment);
    }
    mergeTrees(node, tree2.children[0]);
  }

  return tree1;
};

export default mergeTrees;
