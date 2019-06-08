import React, {useState} from "react";

import {Die} from "../exports";

import "../styles/dice-box.css";

const DiceBox = ({gatherResources, resetResources, finishTurn}) => {
  const [dice, setDice] = useState([
    new Die(0),
    new Die(1),
    new Die(2),
    new Die(3),
    new Die(4),
    new Die(5),
  ]);

  const [rolls, setRolls] = useState(3);

  const rollDice = () => {
    console.log("rolling...");
    resetResources();
    dice
      .filter((die) => !die.selected)
      .forEach((die) => {
        die.rollResource();
      });

    setRolls(rolls - 1);

    gatherResources(dice.map((die) => die.resource.name));
  };

  const toggleSelect = (id) => {
    dice[id].selected = !dice[id].selected;
    setDice([...dice]);
  };

  const endTurn = () => {
    finishTurn();
    setRolls(3);
    setDice([
      new Die(0),
      new Die(1),
      new Die(2),
      new Die(3),
      new Die(4),
      new Die(5),
    ]);
  };

  const diceElements = dice
    .filter((die) => die.resource)
    .map((die) => {
      return (
        <div
          key={die.id}
          className={die.selected ? "selected die" : "die"}
          onClick={(e) => toggleSelect(die.id, e)}>
          <img
            className="resource-icon"
            id={die.resource.name + "-icon"}
            src={die.resource.imageRoute}
            alt={die.resource.name}
          />
        </div>
      );
    });

  return (
    <div className="dice-box">
      <div id="dice-list">{diceElements}</div>
      <br />
      <div id="toolbox">
        {rolls > 0 && (
          <button id="roll" onClick={rollDice}>
            Roll!
          </button>
        )}
        {rolls < 3 && rolls > 0 && (
          <div>
            <button id="build" onClick={(e) => setRolls(0)}>
              Start Building!
            </button>
            <p>Rolls Left: {rolls}</p>
          </div>
        )}
      </div>
      {rolls < 3 && (
        <button id="passTurn" onClick={endTurn}>
          End Turn
        </button>
      )}
    </div>
  );
};

export default DiceBox;
