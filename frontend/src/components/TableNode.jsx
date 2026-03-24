import { Handle, Position } from '@xyflow/react';

export default function TableNode({ data }) {
  return (
    <div className="bg-white border border-slate-300 rounded-md shadow-lg w-48 font-sans">
      
      <div className="bg-slate-800 text-white px-3 py-2 text-sm font-bold rounded-t-md text-center cursor-move">
        {data.label}
      </div>

      <div className="p-3 flex flex-col gap-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-slate-700">id</span>
          <span className="text-slate-400">INT (PK)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-slate-700">email</span>
          <span className="text-slate-400">VARCHAR</span>
        </div>
      </div>

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-blue-500" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-blue-500" />
      
    </div>
  );
}