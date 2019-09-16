import React, { useContext, useState } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { GameContext} from '../index.js'

const ScoreForm = props => {
	ScoreForm.propTypes = {
		score: PropTypes.string, 
	}
	const [username, setUsername] = useState('someone');
	const [score, setScore] = useState(props.score);

	const postScore = () => {
		const response = axios.post('http://localhost:5000/user', 
			{'username': username, 'score': score})
			.then( response => console.log(response.data) )
			.catch((e) => {console.log('cant access high scores', e)});
	}

	const handleFormUsername = event => {
		setUsername(event.target.value)
	}

	return (
		<form className='scoreForm' onSubmit={postScore} >
			<input 
				type="text" 
				name="name" 
				placeholder="Enter name"
				onChange={handleFormUsername}
			/>
			<input type="text" name="scoreValue" 
				value={props.score}
				readOnly
			/>
			<input type="submit" value="Submit"/>
		</form>
	);
};


const TopScoresDisplay = props => {
	var topScores = props.scores;
	return (
		<div>
			{topScores.map(score => 
				<div key={score.id}>
					<p>{score.name}: {score.scoreValue} </p> 
				</div>
			)}
		</div>
	);
}


		//<form className='scoreForm' method='POST' action='/'>
const StartButton = () => {
	const { setRestart } = useContext(GameContext);
	//const { setRestart, setGameOver, setGameWon} = useContext(GameContext);
	//const { tiles, setTiles } = useContext(BoardContext);

	//const newTiles = [ [0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]  ]

	//const reset = () => {
		//console.log('reset');
		//setGameOver(false);
		//setGameWon(false);	
		//setTiles(newTiles);
		//console.log(tiles);
	//}
	return (
		<button 
			className="startButton"
			onClick={() => setRestart(true)} > Restart
		</button>
	);
};

// TO DO: replace board when game over
const GameEndDisplay = () => {
  return <p> whooo </p>;
};

export { ScoreForm, TopScoresDisplay, StartButton, GameEndDisplay };
