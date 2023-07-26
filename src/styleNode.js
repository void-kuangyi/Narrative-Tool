import React from "react";
import ReactDOM from "react-dom/client";

// The color map is based on https://github.com/klembot/twinejs/blob/0b724a7fe7dd3c0c161ed1abc861e4188946ed02/src/styles/colors.css#L64
const colorMap = {
  red: "#f5433d",
  orange: "#f59f3d",
  yellow: "#FFFF00",
  green: "#0ac220",
  blue: "#3d93f5",
  purple: "#9f3df5",
};

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => {
  const peopleCount = nodeDatum.count;
  const dynamicSize = 1.5 * (Math.log(peopleCount) / Math.log(1.2)) + 10;
  const isInput = nodeDatum.type === "input";
  const comments = nodeDatum.comment;
  const tags = nodeDatum.tags;
  return (
    <g>
      <circle
        r={dynamicSize}
        style={
          tags
            ? { fill: colorMap[tags[0].color], stroke: "none" }
            : { fill: "#4355A3", stroke: "none" }
        }
        onClick={toggleNode}
      ></circle>
      <text
        textAnchor="middle"
        alignmentBaseline="central"
        fill="white"
        fontSize="1rem"
        strokeWidth="0px"
        onClick={toggleNode}
      >
        {peopleCount}
      </text>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: "4px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            {tags &&
              tags.slice(1).map((tag) => (
                <span
                  style={{
                    backgroundColor: colorMap[tag.color],
                    padding: "6px 10px",
                    textAlign: "center",
                    fontWeight: "600",
                    borderRadius: "12px",
                    color: tag.color != "yellow" && "white",
                    width: "fit-content",
                  }}
                >
                  {tag.name}
                </span>
              ))}
          </div>
          <span className="nodeText" style={{ fontWeight: 300 }}>
            {nodeDatum.name}
          </span>
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
