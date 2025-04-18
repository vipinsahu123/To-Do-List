import React, { useState } from "react";


const Listbox = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTaskList([...taskList, { text: task, complete: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updatedTask = [...taskList];
    updatedTask[index].complete = !updatedTask[index].complete;
    setTaskList(updatedTask);
  }

  const deleteTask = (index) => {
      setTaskList(taskList.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="bg-gray-100 h-screen flex justify-center ">
        <div className="overflow-auto bg-white p-5 w-lg shadow-lg h-120 mt-20 rounded-xl">
          <h1 className="text-2xl font-bold mb-5 ">My List</h1>
          <div className="flex">
            <input
              className="flex-grow border rounded-l-full p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              type="text"
              placeholder="Add your task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <button
              className="bg-[#FF9D23] px-4  rounded-r-full border text-white font-bold hover:bg-[#FF7F3E]"
              onClick={addTask}
            >
              ADD
            </button>
          </div>
          <div className=" m-4">
            {taskList.map((task, index) => (

              <div key={index} className="flex justify-between  p-2">
                <div className="flex" onClick={() => {toggleTask(index)}}>
                  <input type="checkbox" className="rounded-full" />
                  {task.complete ? <s className="pl-8 font-bold"> {task.text} </s> : <p className="pl-8 font-bold">{task.text}</p> }
                
                </div>
                <button onClick={() => {deleteTask(index)}} className="font-bold hover:text-red-500">x</button>
              </div>
            
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listbox;
