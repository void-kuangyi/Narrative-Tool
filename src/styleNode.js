const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => {
  const peopleCount = nodeDatum.count;
  return (
    <g>
      <circle
        r={peopleCount * 10}
        onClick={toggleNode}
        style={{ fill: "#4355A3", stroke: "none" }}
      ></circle>
      <text
        text-anchor="middle"
        alignment-baseline="central"
        fill="white"
        font-size={peopleCount * 10}
        stroke-width="0px"
      >
        {peopleCount}
      </text>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <h3 style={{ textAlign: "center", fontWeight: 300 }}>
          {nodeDatum.name}
        </h3>
      </foreignObject>
    </g>
  );
};

export default renderForeignObjectNode;
