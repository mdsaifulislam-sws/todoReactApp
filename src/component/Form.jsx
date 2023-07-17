import { useState } from "react";
export default function Form({ addList }) {
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setInput(input);
    addList(input);
    setInput("");
  };

  return (
    <form className="p-5  w-3/5 m-auto" onSubmit={addTask}>
      {/* type your description input file */}
      <div className="bg-white px-3 py-2 rounded-md">
        <input
          className="outline-none border-none w-full"
          type="text"
          placeholder="Type Description"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      {/* adding description button */}
      <div className="mt-4 text-center">
        <button
          type="submit"
          className="bg-green-500 rounded-lg px-4 py-2 text-white"
          onClick={addTask}
        >
          Add Description
        </button>
      </div>
    </form>
  );
}
