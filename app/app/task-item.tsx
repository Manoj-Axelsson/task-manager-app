import { useState } from 'react';

interface TaskItemProps {
  title: string;
  description: string;
}

export default function TaskItem({ title, description }: TaskItemProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-opacity ${
      completed ? 'opacity-50' : 'opacity-100'
    }`}>
      <h3 className={`text-lg font-bold text-gray-900 mb-2 ${
        completed ? 'line-through' : ''
      }`}>
        {title}
      </h3>
      <p className="text-medium text-gray-600 leading-relaxed mb-4">
        {description}
      </p>
      <button
        onClick={() => setCompleted(!completed)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          completed
            ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
            : 'bg-green-100 text-green-800 hover:bg-green-200'
        }`}
      >
        {completed ? 'Undo' : 'Mark Complete'}
      </button>
    </div>
  );
}
