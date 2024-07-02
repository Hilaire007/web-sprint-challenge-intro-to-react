import React, { useState } from "react";

function Character({ data }) {
  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [homeWorld, setHomeWorld] = useState(false);
  const toggle = () => {
    setHomeWorld(!homeWorld);
  };

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className="character-card" onClick={toggle}>
      <h3 className="character-name">{data.name}</h3>
      {homeWorld && (
        <p>
          Planet:{" "}
          <span className="character-planet">{data.homeworld.name}</span>
        </p>
      )}
    </div>
  );
}

export default Character;
