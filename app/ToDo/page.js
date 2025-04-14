"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // prevent empty task

    const newTask = { title, desc };
    setTaskList([...taskList, newTask]);
    setTitle("");
    setDesc("");
  };

  const handleDelete = (indexToDelete) => {
    const filteredTasks = taskList.filter((_, index) => index !== indexToDelete);
    setTaskList(filteredTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 mt-15">
      <h1 className="text-4xl font-bold mb-6">📝 My To-Do List</h1>

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            className="p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Task description"
            rows="3"
            className="p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          ></textarea>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold transition">
            ➕ Add Task
          </button>
        </form>

        <ul className="mt-6 space-y-3">
          {taskList.length > 0 ? (
            taskList.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-start bg-gray-700 p-3 rounded shadow-sm transition-all"
              >
                <div>
                  <span className="text-gray-400 inline mr-1 text-sm">{index+1}.</span><h3 className="inline font-semibold">{task.title}</h3>
                  {task.desc && <p className="text-sm text-gray-300">{task.desc}</p>}
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-600 font-bold"
                >
                  ✖
                </button>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-400 bg-gray-700 p-3 rounded">
              <span>No Task Found</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Page;
