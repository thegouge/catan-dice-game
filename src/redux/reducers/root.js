import {SCORE_ROUND, END_TURN} from "../actions/types";
import {ResourcePool} from "../../exports";

const initialState = {
  rounds: new Array(15).fill(0),
  playerTotal: 0,
  currentRoundIndex: 0,
  currentResources: new ResourcePool(),
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCORE_ROUND:
      return {
        ...state,
        rounds: state.rounds
          .slice(0, state.currentRoundIndex)
          .concat(action.payload)
          .concat(state.rounds.slice(state.currentRoundIndex + 1)),
        playerTotal: state.rounds.reduce(
          (runningTotal, round) => runningTotal + round,
          action.payload
        ),
      };

    case END_TURN:
      return {
        ...state,
        currentRoundIndex: state.currentRoundIndex + 1,
        currentResources: new ResourcePool(),
      };

    default:
      return state;
  }
};

export default rootReducer;
