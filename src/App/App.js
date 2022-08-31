import React from 'react';
import { Meme } from '../Meme/Meme';
import { Switch, Route } from 'react-router-dom';
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';
import styles from './styles.module.css';

export const App = () => {
	return (
		<div className={styles.container}>
			<h1>Creador De Memes</h1>
			<Switch>
				<Route exact path='/'>
					<Meme />
				</Route>
				<Route path='/memecreado'>
					<MemeGenerated />
				</Route>
			</Switch>
		</div>
	);
};
