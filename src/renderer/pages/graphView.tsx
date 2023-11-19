import { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
  Background,
  ReactFlowProvider,
  Node,
  Edge,
  Connection,
  EdgeChange,
  NodeChange,
} from 'reactflow';
import TextAndHeaderNode from '../components/textAndHeaderNode';
import 'reactflow/dist/style.css';

// Define the type for your custom node data if needed
type CustomNodeData = {
  value: number;
};

const initialNodes: Node<CustomNodeData>[] = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];

const nodeTypes = { textUpdater: TextAndHeaderNode };

function GraphView() {
  const [nodes, setNodes] = useState<Node<CustomNodeData>[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <ReactFlowProvider>
      <h1 style={{ textAlign: 'center' }}>Graph View</h1>
      <div
        style={{ width: 'calc(100vw - 40px)', height: 'calc(100vh - 100px)' }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes} // Ensure you have a TextAndHeaderNode component defined
          style={{ width: '100%', height: '100%' }}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

export default GraphView;
