import { CREATE_SCORE, SET_SCORE } from './action';
import Score from './score';

const initialState = {
    score: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SCORE: 
        return {
            score: action.scores,
        };
        case CREATE_SCORE:
             const newScore = new Score(
                 action.name,
                 action.score,
                 );
                return {
                    ...state,
                    score: state.score.concat(newScore),
                };
    }
    return state;
};
