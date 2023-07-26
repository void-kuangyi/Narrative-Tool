import "./App.css";
import React from "react";
import { Tree } from "react-d3-tree";
import transformData from "./transformData";
import renderForeignObjectNode from "./styleNode";

function App() {
  // var data = window.narrativeSurveyDataJson;
  var data = require("./data.json");
  const transformedData = transformData(data);
  const foreignObjectProps = { width: 400, height: 300, x: 50, y: -10 };
  return (
    <div className="App">
      <span
        style={{
          fontSize: "30px",
          color: "white",
          fontWeight: "600",
        }}
      >
        TwineJS Researcher Web
      </span>
      <div className="Tree">
        <Tree
          data={transformedData}
          pathClassFunc={() => "custom-link"}
          orientation="vertical"
          hasInteractiveNodes="true"
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
          nodeSize={{ x: 300, y: 300 }}
          translate={{ x: window.screen.width / 2, y: 100 }}
        />
      </div>
    </div>
  );
}

export default App;
