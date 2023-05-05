function mergeTrees(tree1, tree2) {
  // 当tree2为null时，直接返回tree1
  if (!tree2) {
    return tree1;
  }

  // 找到tree1中与tree2节点名字相同的节点
  const node = findNodeBFS(tree1, tree2.name);

  // 如果在tree1中找不到与tree2节点名字相同的节点，直接将tree2节点添加到tree1的子节点中
  if (!node) {
    tree1.children.push(tree2);
  } else {
    // 如果在tree1中找到了与tree2节点名字相同的节点，则递归合并子树
    node.count = node.count + 1;
    if (node.type == "input") {
      node.comment = node.comment.concat(tree2.comment);
    }
    mergeTrees(node, tree2.children[0]);
  }

  return tree1;
}

function findNodeBFS(tree, nodeName) {
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
}

export default mergeTrees;
