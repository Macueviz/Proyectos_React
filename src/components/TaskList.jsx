import { useContext } from "react";
import TaskCard from "./TaskCard";
import PropTypes from "prop-types";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4x1 font-bold text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard key={task.id} task={task}/>
        </div>
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
