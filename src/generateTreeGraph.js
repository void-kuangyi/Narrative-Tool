import mergeTrees from "./mergeTrees";
// var fs = require("fs");
var data = require("./data.json");

const generateTreeNodes = (Nodes) => {
  let rootNode = {
    name: "root",
    count: 0,
    children: [],
  };
  let currentParentNode = rootNode;
  for (const node of Nodes) {
    let newNode = {
      name: node.name,
      count: node.count,
      type: node.type,
      children: [],
    };
    if (newNode.type == "input") {
      newNode.comment = node.comment;
    }
    currentParentNode.children.push(newNode);
    currentParentNode = newNode;
  }
  return rootNode.children;
};

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
        count: 1,
        type: choicesObj[index].type,
        parent: index == 0 ? "root" : choicesObj[index - 1].text,
        children: [],
      };
      if (node.type === "input") {
        node.comment = [choicesObj[index].comment];
      }
      nodes.push(node);
    }

    const treeNodes = generateTreeNodes(nodes);
    const treeeNodesObj = {
      name: "root",
      count: 0,
      children: treeNodes,
    };
    console.log("treeNodes", treeeNodesObj);
    rootNode = mergeTrees(rootNode, treeeNodesObj);
    console.log(rootNode);
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
