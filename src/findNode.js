const findNode = (parent, node) => {
    if (node.name === parent) {
      return node;
    } else {
      for (let i = 0; i < node.children.length; i++) {
        let found = findNode(parent, node.children[i]);
        if (found) {
          return found;
        }
      }
      return null;
    }
  }

export default findNode;