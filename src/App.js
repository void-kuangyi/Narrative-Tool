import "./App.css";
import Tree from "react-d3-tree";
import generateTreeGraph from "./generateTreeGraph";

function App() {
  const data = generateTreeGraph();
  return (
    <div className="App">
      <div id="treeWrapper" style={{ width: "100%", height: "100%" }}>
        <Tree data={data} />
      </div>
    </div>
  );
}

export default App;
