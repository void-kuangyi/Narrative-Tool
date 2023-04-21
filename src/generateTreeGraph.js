var fs = require("fs");
var data = require("./data.json");

function transformData(jsonData) {
  // Create a root node for the transformed data
  let rootNode = {
    name: jsonData[0].text,
    count: 0,
    children: [],
  };

  // Loop through the JSON data and transform each node
  for (let i = 1; i < jsonData.length; i++) {
    let jsonNode = jsonData[i];
    let node = {};
    // Create a new node with the same properties as the JSON node
    node = {
      name: jsonNode.text,
      count: 0,
      parent: jsonData[i - 1].text,
      children: [],
    };

    // Add the node to its parent's children array
    let parentNode = findNode(node.parent, rootNode);
    if (parentNode) {
      parentNode.children.push(node);
    } else {
      rootNode.children.push(node);
    }
  }

  // Return the transformed data
  return rootNode;
}

function findNode(parent, node) {
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

const generateTreeGraph = () => {
  // var json = JSON.parse(data);
  let choicesObj = [];
  data.forEach(({ choices }) => choicesObj.push(...choices));

  var obj = transformData(choicesObj);
  return obj;
  fs.writeFile("myjsonfile.json", JSON.stringify(obj), "utf8", () => {});
};

export default generateTreeGraph;
