import ReactFlow, { Controls, Background, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

const edges = [{ id: '1-2', source: '1', target: '2' }];

const nodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 250, y: 5 }, // Adjusted for visibility
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 350, y: 105 }, // Adjusted for visibility
  },
];

function GraphView() {
  return (
    <ReactFlowProvider>
      <h1 style={{ textAlign: 'center' }}>Graph View</h1>
      <div
        style={{ width: 'calc(100vw - 40px)', height: 'calc(100vh - 100px)' }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
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
