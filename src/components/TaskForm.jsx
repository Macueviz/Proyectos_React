import { useContext, useState } from "react";
import PropTypes from 'prop-types';
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
      <h2 className="text-2x1 text-white mb-3"> Crea tu tarea</h2>
      <input
        placeholder="Escribe el título de tu tarea"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => {
          setTitle(e.target.value);
          }}
        value={title}
      />
      <textarea
        placeholder="Escribe la descrip de tu tarea"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

TaskForm.propTypes = {
  createTask: PropTypes.func
}

export default TaskForm;
