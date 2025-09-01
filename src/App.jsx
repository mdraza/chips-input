import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState(["coding", "reading"]);

  const handleAddChip = (e) => {
    if (e.key === "Enter" && input !== "") {
      setChips((prev) => [...prev, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const copyChip = [...chips];
    copyChip.splice(index, 1);
    console.log(copyChip);
    setChips(copyChip);
  };

  return (
    <div className="main">
      <h2>Tags</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleAddChip(e)}
      />
      <div className="chips">
        {chips.map((cp, index) => (
          <div key={index} className="chip">
            {cp}
            <button onClick={() => handleDelete(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
