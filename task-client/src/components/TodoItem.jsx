export default function TodoItem({ todo, onDelete, onUpdate }) {
  const isCompleted = todo.status === "true" || todo.status === true;

  const handleToggle = () => {
    // send the status as string to match backend
    onUpdate(todo.id, { ...todo, status: (!isCompleted).toString() });
  };

  return (
    <div className="group bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex items-center gap-3">
      {/* Toggle button */}
      <button
        onClick={handleToggle}
        className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          isCompleted
            ? "bg-slate-900 border-slate-900"
            : "border-slate-300 hover:border-slate-400"
        }`}
      >
        {isCompleted && (
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Task info */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium break-words ${
            isCompleted ? "text-slate-400 line-through" : "text-slate-900"
          }`}
        >
          {todo.name}
        </p>
        {todo.dueDate && (
          <p className="text-xs text-slate-400 mt-1">
            Due: {new Date(todo.dueDate).toLocaleString()}
          </p>
        )}
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="shrink-0 opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 transition-all duration-200 rounded-lg hover:bg-red-50"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
