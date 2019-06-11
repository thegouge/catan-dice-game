import {SCORE_ROUND} from "../actions/types";

export const scoreRound = (payload) => {
  return {type: SCORE_ROUND, payload};
};
