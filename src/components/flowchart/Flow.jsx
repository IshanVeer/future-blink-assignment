import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ButtonNodes from "./nodes/ButtonNodes";

function Flow({ onOpen }) {
  const nodeTypes = {
    buttonNode: ButtonNodes,
  };
  const nodes = [
    {
      id: "1", // required
      type: "buttonNode",
      position: { x: 0, y: 0 },
      data: {
        label: "Hello",
        onClick: () => {
          onOpen();
        },
      },
    },
  ];
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
