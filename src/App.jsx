import { useState, useEffect } from "react";
import FieldAnimal from "./Components/FieldAnimal";
import idGenerator from "./Common/idGenerator";

function App() {
  const [field, setField] = useState([]);
  const [fieldNamber, setFieldNamber] = useState(1);

  const add = (what) => {
    const fieldCopy = field.slice();
    fieldCopy.push({
      id: idGenerator(),
      animal: what,
      field: parseInt(fieldNamber),
    });
    setField(fieldCopy);
    localStorage.setItem("animals", JSON.stringify(fieldCopy));
  };

  const selectField = (e) => {
    setFieldNamber(e.target.value);
  };

  const goHome = (id) => {
    const fieldCopy = field.slice();
    const ind = fieldCopy.findIndex((e) => e.id === id);
    fieldCopy.splice(ind, 1);
    setField(fieldCopy);
    localStorage.setItem("animals", JSON.stringify(fieldCopy));
  };

  const groupGoHome = (group) => {
    const fieldCopy = field.slice();
    while (true) {
      const ind = fieldCopy.findIndex((e) => e.animal === group);
      if (ind < 0) {
        break;
      }
      fieldCopy.splice(ind, 1);
    }
    setField(fieldCopy);
    localStorage.setItem("animals", JSON.stringify(fieldCopy));
  };

  useEffect(() => {
    const animalsFromStorage = localStorage.getItem("animals");
    if (null !== animalsFromStorage) {
      setField(JSON.parse(animalsFromStorage));
    }
  }, []);

  const setWeight = (e, id, input) => {
    const fieldCopy = field.slice();

    e.preventDefault();
    console.log(fieldCopy);
    let weight = input;
    let curr = fieldCopy.find((el) => el.id === id);
    let test = { ...curr, weight };
    const ind = fieldCopy.findIndex((e) => e.id === id);
    fieldCopy.splice(ind, 1, test);
    setField(fieldCopy);
    localStorage.setItem("animals", JSON.stringify(fieldCopy));
  };

  const stats = () => {
    const fieldCopy = field.slice();
    console.log(fieldCopy);
    fieldCopy.forEach((element) => {
      console.log(element);
      if (element.animal === "cow") {
        console.log(element.animal);
      }
    });
  };
  stats();

  return (
    <>
      <div className="field">
        <div className="field__part">
          {field.map((fieldAnimal, i) => (
            <FieldAnimal
              key={i}
              field={1}
              fieldAnimal={fieldAnimal}
              goHome={goHome}
              setWeight={setWeight}
            ></FieldAnimal>
          ))}
        </div>
        <div className="field__part">
          {field.map((fieldAnimal, i) => (
            <FieldAnimal
              key={i}
              field={2}
              fieldAnimal={fieldAnimal}
              goHome={goHome}
              setWeight={setWeight}
            ></FieldAnimal>
          ))}
        </div>
        <div className="field__part">
          {field.map((fieldAnimal, i) => (
            <FieldAnimal
              key={i}
              field={3}
              fieldAnimal={fieldAnimal}
              goHome={goHome}
              setWeight={setWeight}
            ></FieldAnimal>
          ))}
        </div>
      </div>
      <div className="buttons-holder">
        <button onClick={() => add("cow")}>Add cow</button>
        <button onClick={() => add("sheep")}>Add sheep</button>
        <button onClick={() => add("horse")}>Add horse</button>
        <select value={fieldNamber} onChange={selectField}>
          <option value={1}>Field One</option>
          <option value={2}>Field Two</option>
          <option value={3}>Field Three</option>
        </select>
        <div className="buttons-holder">
          <span>COWS: </span>
          <span>SHEEPS: </span>
          <span>HORSES: </span>
        </div>
      </div>
      <div className="buttons-holder">
        <button onClick={() => groupGoHome("cow")}>Go cows</button>
        <button onClick={() => groupGoHome("sheep")}>Go sheeps</button>
        <button onClick={() => groupGoHome("horse")}>Go horses</button>
      </div>
    </>
  );
}

export default App;
