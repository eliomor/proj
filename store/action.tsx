export const CREATE_SCORE = 'CREATE_SCORE';
export const SET_SCORE = 'SET_SCORE';
import Score from './score';


export const setScores = () => {
    return async (dispatch) => {
        const response = await fetch('https://saymonsay-5ad7c-default-rtdb.europe-west1.firebasedatabase.app/scores.json');
        const resData = await response.json();
        const loadedScores = [];
        for (const key in resData ) {
            loadedScores.push(new Score(
                resData[key].name,
                resData[key].score,
               )
            );
        }
        dispatch ({type: SET_SCORE, scores: loadedScores });
    };
};

export const createScore = (name, score) => {
    return async (dispatch) => {
        await fetch('https://saymonsay-5ad7c-default-rtdb.europe-west1.firebasedatabase.app/scores.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                score
            })
        });
        dispatch({ type: CREATE_SCORE, name, score });
    };
 };
