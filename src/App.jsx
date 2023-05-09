import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  // const users = [
  //   {
  //     id: 1,
  //     name: "Miguel",
  //     email: "ddd@fff",
  //     image: "https://robohash.org/user",
  //   },
  //   {
  //     id: 2,
  //     name: "Adrian",
  //     email: "455d@fff",
  //     image: "https://robohash.org/user1",
  //   },
  //   {
  //     id: 3,
  //     name: "Alberto",
  //     email: "158@ffddf",
  //     image: "https://robohash.org/user2",
  //   },
  // ];


  return (
    <main className="bg-zinc-700 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm/>
        <TaskList/>
      </div>
        
    </main>
  );
}

export default App;
