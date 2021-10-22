import { useState } from "react";

function FieldAnimal({ fieldAnimal, field, goHome, setWeight }) {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  if (fieldAnimal.weight > 200) {
    goHome(fieldAnimal.id);
  }

  if (field === fieldAnimal.field && "cow" === fieldAnimal.animal) {
    return (
      <div className="cow">
        <form
          className="div"
          onSubmit={(e) => setWeight(e, fieldAnimal.id, input)}
        >
          <button type="submit">KG:</button>
          <input
            onChange={(e) => handleChange(e)}
            className="input"
            type="text"
          />
        </form>
        <h5>{fieldAnimal.id}</h5>
        <span style={{ color: fieldAnimal.weight > 100 ? "red" : "black" }}>
          Svoris: {fieldAnimal.weight}
        </span>
        <button onClick={() => goHome(fieldAnimal.id)}>Go home</button>
      </div>
    );
  } else if (field === fieldAnimal.field && "sheep" === fieldAnimal.animal) {
    return (
      <div className="sheep">
        <form
          className="div"
          onSubmit={(e) => setWeight(e, fieldAnimal.id, input)}
        >
          <button type="submit">KG:</button>
          <input
            onChange={(e) => handleChange(e)}
            className="input"
            type="text"
          />
        </form>
        <h5>{fieldAnimal.id}</h5>
        <span style={{ color: fieldAnimal.weight > 100 ? "red" : "fblack" }}>
          Svoris: {fieldAnimal.weight}
        </span>
        <button onClick={() => goHome(fieldAnimal.id)}>Go home</button>
      </div>
    );
  } else if (field === fieldAnimal.field && "horse" === fieldAnimal.animal) {
    return (
      <div className="horse">
        <form
          className="div"
          onSubmit={(e) => setWeight(e, fieldAnimal.id, input)}
        >
          <button type="submit">KG:</button>
          <input
            onChange={(e) => handleChange(e)}
            className="input"
            type="text"
          />
        </form>
        <h5>{fieldAnimal.id}</h5>
        <span style={{ color: fieldAnimal.weight > 100 ? "red" : "fblack" }}>
          Svoris: {fieldAnimal.weight}
        </span>
        <button onClick={() => goHome(fieldAnimal.id)}>Go home</button>
      </div>
    );
  } else {
    return null;
  }
}

export default FieldAnimal;
