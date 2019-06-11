import {SCORE_ROUND, END_TURN} from "../actions/types";

export const scoreRound = (payload) => {
  return {type: SCORE_ROUND, payload};
};

export const endTurn = () => {
  return {type: END_TURN};
};
