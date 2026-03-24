import { useState, useMemo } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import TableNode from './components/TableNode'; 

const initialNodes = [
  {
    id: '1', 
    type: 'databaseTable', 
    position: { x: 250, y: 150 }, 
    data: { label: 'users' }, 
  },
];

const initialEdges = [];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const nodeTypes = useMemo(() => ({ databaseTable: TableNode }), []);

  return (
    <div className="w-screen h-screen bg-slate-50">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background color="#ccc" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;