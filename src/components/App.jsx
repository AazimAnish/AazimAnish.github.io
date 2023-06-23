// import React from 'react';
import { css } from '@emotion/css';
import Home from './homePage/homePage';
import About from './aboutPage/aboutPage';
// import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Home from './mainPage/homePage';

const App = () => {
	return (
		<div className={styles.container}>
			<Home />
			<About />
		</div>
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100%;
		height: 100%;
	`
}

export default App;
