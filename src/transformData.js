import mergeTrees from "./mergeTrees";
// var fs = require("fs");

const transformChoiceDataTreePerParticipant = (nodes) => {
  let rootNode = {
    name: "root",
    count: 0,
    children: [],
  };
  let currentParentNode = rootNode;
  for (const node of nodes) {
    let newNode = node;
    currentParentNode.children.push(newNode);
    currentParentNode = newNode;
  }
  return rootNode;
};

const transformChoicePerParticipant = (choices) => {
  let nodes = [];
  for (let index in choices) {
    const choice = choices[index];
    let node = {
      name: choice.text,
      type: choice.type,
      count: 1,
      children: [],
    };
    if (node.type === "input") {
      node.comment = [choice.comment];
    }
    if (node.tag !== "undefined") {
      node.tags = choice.tags;
    }
    nodes.push(node);
  }
  return nodes;
};

const transformChoicesData = (choicesObj) => {
  // Create a root node for the transformed data
  let rootNode = {
    name: "root",
    count: 0,
    children: [],
  };
  // Loop through the JSON data and transform each node
  for (let i = 0; i < choicesObj.length; i++) {
    const choiceData = transformChoicePerParticipant(choicesObj[i]);
    const choiceDataTree = transformChoiceDataTreePerParticipant(choiceData);
    rootNode = mergeTrees(rootNode, choiceDataTree);
  }

  // Return the transformed data
  return rootNode;
};

const transformData = (data) => {
  let choicesObj = [];
  data.forEach(({ choices }) => choicesObj.push(choices));
  var obj = transformChoicesData(choicesObj);
  // fs.writeFile("myjsonfile.json", JSON.stringify(obj), "utf8", () => {});
  return obj;
};
// generateTreeGraph();
export default transformData;
