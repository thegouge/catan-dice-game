import React, {useState, useEffect} from "react";

import {Die} from "../../exports";

import "./dice-box.css";

const DiceBox = ({
  gatherResources,
  resetResources,
  finishTurn,
  buildingPhase,
}) => {
  const [dice, setDice] = useState([
    new Die(0),
    new Die(1),
    new Die(2),
    new Die(3),
    new Die(4),
    new Die(5),
  ]);

  const [rolls, setRolls] = useState(3);

  useEffect(() => {
    if (buildingPhase) setRolls(0);
  }, [buildingPhase]);

  const rollDice = () => {
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
      <div className="dice-list">{diceElements}</div>
      <br />
      <div className="toolbox">
        {rolls > 0 && (
          <button id="roll" onClick={rollDice}>
            Roll!
          </button>
        )}
        {rolls < 3 && rolls > 0 && (
          <div>
            <p>Rolls Left: {rolls}</p>
          </div>
        )}
      </div>
      {rolls < 3 && (
        <button className="passTurn" onClick={endTurn}>
          End Turn
        </button>
      )}
    </div>
  );
};

export default DiceBox;
