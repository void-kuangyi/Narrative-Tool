const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  <g>
    <circle
      r={15}
      onClick={toggleNode}
      style={{ fill: "#4355A3", stroke: "none" }}
    ></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <h3 style={{ textAlign: "center", fontWeight: 300 }}>{nodeDatum.name}</h3>
    </foreignObject>
  </g>
);

export default renderForeignObjectNode;
