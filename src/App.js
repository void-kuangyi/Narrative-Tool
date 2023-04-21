import "./App.css";
import React from "react";
import { Tree } from "react-d3-tree";
import generateTreeGraph from "./generateTreeGraph";
import renderForeignObjectNode from "./styleNode";

function App() {
  const data = generateTreeGraph();
  const foreignObjectProps = { width: 120, height: 300, x: 10 };
  return (
    <div className="App">
      <Tree
        data={data}
        pathClassFunc={() => "custom-link"}
        orientation="vertical"
        hasInteractiveNodes="true"
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        nodeSize={{ x: 120, y: 300 }}
        translate={{ x: window.screen.width / 2, y: 100 }}
      />
    </div>
  );
}

export default App;
