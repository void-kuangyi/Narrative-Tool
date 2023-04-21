var fs = require("fs");
// var data = require("./data.json");

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

const data = [
  {
    id: 41,
    resource_id: "u5bfa3b1d7f354709",
    ts: "2023-04-14T14:51:43",
    pp1: "",
    pp2: "",
    pp3: "",
    choices: [
      {
        index: 0,
        text: "Ik ben klaar om te beginnen!",
        type: "choice",
      },
      {
        index: 1,
        text: 'Ik zeg: "Ja, daar heb ik wel eens van gehoord".',
        type: "choice",
      },
      {
        index: 1,
        text: "Ik heb weinig vertrouwen dat mijn arts suggesties geeft die waardevol kunnen zijn voor mij.",
        type: "choice",
      },
      {
        text: "Kunt u wat meer vertellen over uw gedachtes bij deze keuze? Wat maakt dat u de suggesties van uw arts vertrouwd?",
        comment: "Hmmmm, i don't know?",
        type: "input",
      },
      {
        index: 0,
        text: "Verder gaan",
        type: "choice",
      },
      {
        index: 0,
        text: 'Ik zeg: "Ja graag, ik ben benieuwd naar het onderzoek, en wil hier graag meer informatie over."',
        type: "choice",
      },
      {
        index: 0,
        text: 'Ik zeg: "Ik wil meer weten over de praktische zaken van het onderzoek: de duur, het aantal bezoeken, de metingen, en de vergoeding."',
        type: "choice",
      },
      {
        index: 0,
        text: 'Ik zeg: "Ik wil graag meer informatie over het onderzoek."',
        type: "choice",
      },
      {
        index: 0,
        text: 'Ik zeg: "Ik wil meer weten over de mogelijke bijwerkingen en andere nadelige effecten."',
        type: "choice",
      },
      {
        index: 1,
        text: 'Ik zeg: "Ik heb alle informatie die ik nodig heb om te beslissen of ik wel of niet deel wil nemen aan het onderzoek."',
        type: "choice",
      },
      {
        index: 1,
        text: 'Ik zeg: "Ik denk dat ik niet wil mee doen aan het onderzoek."',
        type: "choice",
      },
      {
        text: "Kunt u meer vertellen over uw gedachtes bij deze keuze? Wat maakt dat u niet mee zou willen doen aan het onderzoek?",
        comment: ":D ",
        type: "input",
      },
      {
        text: "Wilt u verder nog iets kwijt?",
        comment: "Nope",
        type: "input",
      },
    ],
  },
  {
    id: 28,
    resource_id: "uc62cd44d4d7048a5",
    ts: "2023-04-07T15:03:38",
    pp1: "",
    pp2: "",
    pp3: "",
    choices: [
      {
        index: 0,
        text: "Ik ben klaar om te beginnen!",
        type: "choice",
      },
      {
        index: 0,
        text: 'Ik zeg: "Nee, daar ben ik niet bekend mee. Wat is dat precies?"',
        type: "choice",
      },
      {
        index: 0,
        text: "Ik heb vertrouwen dat mijn arts suggesties geeft die waardevol kunnen zijn voor mij.",
        type: "choice",
      },
      {
        index: 2,
        text: "Deze situatie komt niet overeen met mijn eigen ervaring.",
        type: "choice",
      },
      {
        text: "Kunt u meer vertellen over deze keuze? Wat maakt dat deze situatie niet overeenkomt met uw ervaring?",
        comment: "Nope",
        type: "input",
      },
      {
        index: 0,
        text: "Verder gaan",
        type: "choice",
      },
      {
        index: 3,
        text: 'Ik zeg: "Ik wil iets anders weten over het onderzoek, namelijk …"',
        type: "choice",
      },
      {
        text: "",
        comment: "Yes",
        type: "input",
      },
      {
        text: "Zou informatie hierover uw beslissing om wel of niet deel te nemen aan het onderzoek beïnvloeden?",
        comment: "Yes",
        type: "input",
      },
      {
        index: 0,
        text: "Verder gaan",
        type: "choice",
      },
      {
        index: 0,
        text: 'Ik zeg: "Ik denk dat ik mee wil doen aan het onderzoek, en bespreek het graag met de onderzoeksverpleegkundige."',
        type: "choice",
      },
      {
        text: "Kunt u meer vertellen over uw gedachtes bij deze keuze? Wat maakt dat u mee zou willen doen aan het onderzoek?",
        comment: "Test",
        type: "input",
      },
      {
        text: "Wilt u verder nog iets kwijt?",
        comment: "test",
        type: "input",
      },
    ],
  },
  {
    id: 15,
    resource_id: "ua37b5b4aaa4049c3",
    ts: "2023-04-07T14:56:12",
    pp1: "",
    pp2: "",
    pp3: "",
    choices: [
      {
        index: 0,
        text: "Ik ben klaar om te beginnen!",
        type: "choice",
      },
      {
        index: 0,
        text: 'Ik zeg: "Nee, daar ben ik niet bekend mee. Wat is dat precies?"',
        type: "choice",
      },
      {
        index: 1,
        text: "Ik heb weinig vertrouwen dat mijn arts suggesties geeft die waardevol kunnen zijn voor mij.",
        type: "choice",
      },
      {
        text: "Kunt u wat meer vertellen over uw gedachtes bij deze keuze? Wat maakt dat u de suggesties van uw arts vertrouwd?",
        comment: "No idea what I should fill in here?",
        type: "input",
      },
      {
        index: 0,
        text: "Verder gaan",
        type: "choice",
      },
      {
        index: 1,
        text: 'Ik zeg: "Nee, dank u wel, ik hoef geen informatie. Ik wil niet mee doen aan het onderzoek.',
        type: "choice",
      },
      {
        text: "Kunt u meer vertellen over uw gedachtes bij deze keuze? Wat maakt dat u liever niet mee doet?",
        comment: "Great, yes!",
        type: "input",
      },
      {
        index: 0,
        text: "Verder gaan",
        type: "choice",
      },
      {
        index: 3,
        text: 'Ik zeg: "Ik wil iets anders weten over het onderzoek, namelijk …"',
        type: "choice",
      },
      {
        text: "",
        comment: "Yes or no, does it matter?",
        type: "input",
      },
      {
        text: "Zou informatie hierover uw beslissing om wel of niet deel te nemen aan het onderzoek beïnvloeden?",
        comment: "Yes?",
        type: "input",
      },
      {
        index: 0,
        text: "Verder gaan",
        type: "choice",
      },
      {
        index: 1,
        text: 'Ik zeg: "Ik denk dat ik niet wil mee doen aan het onderzoek."',
        type: "choice",
      },
      {
        text: "Kunt u meer vertellen over uw gedachtes bij deze keuze? Wat maakt dat u niet mee zou willen doen aan het onderzoek?",
        comment: "One two three.",
        type: "input",
      },
      {
        text: "Wilt u verder nog iets kwijt?",
        comment: "Nope",
        type: "input",
      },
    ],
  },
];

const checkIfKeyExists = (jsonArray, key) => {
  for (let i = 0; i < jsonArray.length; i++) {
    if (key === jsonArray[i].name) {
      console.log(`Key "${key}" already exists in element ${i}.`);
      return true;
    }
  }
  return false;
};

const transformData = (jsonData) => {
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
      if (!checkIfKeyExists(parentNode.children, node.name)) {
        parentNode.children.push(node);
      }
    } else {
      rootNode.children.push(node);
    }
  }

  // Return the transformed data
  return rootNode;
};

const generateTreeGraph = () => {
  let choicesObj = [];
  data.forEach(({ choices }) => choicesObj.push(...choices));

  var obj = transformData(choicesObj);
  // fs.writeFile("myjsonfile.json", JSON.stringify(obj), "utf8", () => {});
  return obj;
};
// generateTreeGraph();
export default generateTreeGraph;
