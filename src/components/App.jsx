// import React from 'react';
import { css } from '@emotion/css';
import LandingPage from './landingPage/landingPage';
// import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Home from './mainPage/homePage';

const App = () => {
	return (
		<div className={styles.container}>
			<LandingPage />
		</div>
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
	`
}

export default App;
