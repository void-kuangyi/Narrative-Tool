import "./App.css";
import React from "react";
import { Tree } from "react-d3-tree";
import transformData from "./transformData";
import renderForeignObjectNode from "./styleNode";

const Comments = ({ comments }) => {
  return (
    <div
      id="comments"
      style={{
        overflowY: "auto",
        overflowX: "hidden",
        padding: "10px",
        backgroundColor: "#D9E5FF",
        borderRadius: "8px",
        minHeight: "0px",
        visibility: "hidden",
        width: "0px",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        transition: "0.5s",
      }}
    >
      {comments.map((comment) => (
        <div
          className="comment"
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "12px",
          }}
        >
          {comment}
        </div>
      ))}
    </div>
  );
};
const Title = () => (
  <span
    style={{
      fontSize: "30px",
      color: "white",
      fontWeight: "600",
    }}
  >
    TwineJS Researcher Web
  </span>
);

function App() {
  // var data = window.narrativeSurveyDataJson;
  const [comments, setComments] = React.useState([]);
  const callBackComments = (comments) => {
    setComments(comments);
  };
  var data = require("./data.json");
  const transformedData = transformData(data);
  const foreignObjectProps = { width: 200, height: 200, x: 50, y: -10 };
  const renderTree = React.useMemo(
    () => (
      <Tree
        data={transformedData}
        pathClassFunc={() => "custom-link"}
        orientation="vertical"
        hasInteractiveNodes="true"
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({
            ...rd3tProps,
            foreignObjectProps,
            callBackComments,
          })
        }
        nodeSize={{ x: 300, y: 200 }}
        translate={{ x: window.screen.width / 2, y: 100 }}
      />
    ),
    []
  );
  return (
    <div className="App">
      <Title />
      <div
        className="Tree"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {renderTree}
        <Comments comments={comments} />
      </div>
    </div>
  );
}

export default App;
