import React from "react";
import ReactDOM from "react-dom/client";

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => {
  const peopleCount = nodeDatum.count;
  const dynamicSize = 1.5 * (Math.log(peopleCount) / Math.log(1.2)) + 10;
  const isInput = nodeDatum.type == "input";
  const comments = nodeDatum.comment;
  return (
    <g onClick={toggleNode}>
      <circle
        r={dynamicSize}
        style={
          isInput
            ? { fill: "#D9E5FF", stroke: "none" }
            : { fill: "#4355A3", stroke: "none" }
        }
      ></circle>
      <text
        text-anchor="middle"
        alignment-baseline="central"
        fill="white"
        font-size="1rem"
        stroke-width="0px"
      >
        {peopleCount}
      </text>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <span class="nodeText" style={{ fontWeight: 300 }}>{nodeDatum.name}</span>
          {isInput && (
            <div
              style={{
                padding: "10px",
                backgroundColor: "#D9E5FF",
                borderRadius: "8px",
                minHeight: "0px",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
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
          )}
        </div>
      </foreignObject>
    </g>
  );
};

export default renderForeignObjectNode;
