import React, { useState } from 'react';

const GitButton = props => {
	const { imagePath, linkPath, position = 'bottom-right', size = [50, 50] } = props
	const [hover, setHover] = useState(false)

	const publicImagePath = process.env.PUBLIC_URL + imagePath

	const positionStyle = {
		position: 'fixed',
		fontSize: '0',
		bottom: position.includes('bottom') ? '10px' : '',
		top: position.includes('top') ? '10px' : '',
		right: position.includes('right') ? '10px' : '',
		left: position.includes('left') ? '10px' : ''
	}

	const imgStyle = {
		objectFit: 'cover',
		opacity: '0.5',
		transform: 'rotate(0deg)',
		transition: 'all 0.3s'
	}

	const hoverImgStyle = {
		...imgStyle,
		opacity: '1',
		transform: 'rotate(360deg)'
	}

	return (
		<a
			style={positionStyle}
			href={linkPath}
			target="_blank"
			rel="noreferrer noopener"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			<img style={hover ? hoverImgStyle : imgStyle} src={publicImagePath} alt="" width={size[0]} height={size[1]} />
		</a>
	)
}

export default GitButton;
