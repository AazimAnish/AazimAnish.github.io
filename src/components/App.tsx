import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';
import IconButtoncolors from './Button';



export const App: VFC = () => {
	return (
		<div className={styles.container}>
			<TCanvas />
			<IconButtoncolors position='center'/>
			<LinkIconButton imagePath="/assets/icons/github.svg" linkPath="https://github.com/AazimAnish" />
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
