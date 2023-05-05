const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => {
  const peopleCount = nodeDatum.count;
  const dynamicSize = 1.5 * (Math.log(peopleCount) / Math.log(1.2)) + 10;
  const isInput = nodeDatum.type == "input";
  const comments = [
    "Lorem ipsum dolor sit amet,laboris nisi ut aliqut in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    "lalalala,hello",
  ];
  return (
    <g>
      <circle
        r={dynamicSize}
        onClick={toggleNode}
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
        font-size={dynamicSize}
        stroke-width="0px"
      >
        {peopleCount}
      </text>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <h3 style={{ fontWeight: 300 }}>{nodeDatum.name}</h3>
          {isInput && (
            <div
              style={{
                padding: "10px",
                backgroundColor: "#D9E5FF",
                borderRadius: "8px",
                minHeight: "0px",
                overflow: "auto",
              }}
            >
              {comments.map((comment) => (
                <div
                  className="comment"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    marginBottom: "10px",
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
