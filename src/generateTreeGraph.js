import mergeTrees from "./mergeTrees";
var fs = require("fs");
var data = require("./data.json");

const checkIfKeyExists = (jsonArray, key) => {
  for (let i = 0; i < jsonArray.length; i++) {
    if (key === jsonArray[i].name) {
      // console.log(`Key "${key}" already exists in element ${i}.`);
      return true;
    }
  }
  return false;
};

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
};

// const bfs = (root, nodes) => {
//   const queue = [root];
//   const n = nodes;
//   while (queue.length > 0) {
//     const current = queue.shift();
//     const currentNode = n.shift();
//     console.log(current.name);
//     for (const child of current.children) {
//       queue.push(child);
//     }
//   }
//   return null;
// };

function generateNodes(Nodes) {
  let rootNode = {
    name: "root",
    count: 0,
    children: [],
  };
  let currentParentNode = rootNode;
  for (const node of Nodes) {
    const newNode = { name: node.name, children: [] };
    currentParentNode.children.push(newNode);
    currentParentNode = newNode;
  }
  return rootNode.children;
}

const transformData = (choices) => {
  // Create a root node for the transformed data
  let rootNode = {
    name: "root",
    count: 0,
    children: [],
  };
  // Loop through the JSON data and transform each node
  for (let i = 0; i < choices.length; i++) {
    console.log(i);
    let choicesObj = choices[i];

    let nodes = [];
    for (let index in choicesObj) {
      // Create a new node with the same properties as the JSON node
      let node = {
        name: choicesObj[index].text,
        count: 0,
        parent: index == 0 ? "root" : choicesObj[index - 1].text,
        children: [],
      };
      // let parentNode = findNode(node.parent, nodes);
      // if (parentNode) {
      //   parentNode.children.push(node);
      // } else {
      //   nodes.children.push(node);
      // }
      nodes.push(node);
    }

    const treeNodes = generateNodes(nodes);
    const treeeNodesObj = {
      name: "root",
      count: 0,
      children: treeNodes,
    };
    console.log("treeNodes", treeeNodesObj);
    rootNode = mergeTrees(rootNode, treeeNodesObj);
    console.log(rootNode);
    // Add the node to its parent's children array
    //   let parentNode = findNode(node.parent, rootNode);
    //   if (parentNode) {
    //     if (!checkIfKeyExists(parentNode.children, node.name)) {
    //       parentNode.children.push(node);
    //     }
    //   } else {
    //     rootNode.children.push(node);
    //   }
    // }
  }

  // Return the transformed data
  return rootNode;
};

const generateTreeGraph = () => {
  let choicesObj = [];
  data.forEach(({ choices }) => choicesObj.push(choices));
  var obj = transformData(choicesObj);
  // fs.writeFile("myjsonfile.json", JSON.stringify(obj), "utf8", () => {});
  return obj;
};
// generateTreeGraph();
export default generateTreeGraph;
