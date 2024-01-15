"use client"

import { createPortal } from 'react-dom';

const FloatingItem = ({ children, top, left }) => {
	return createPortal(
		<div className="floating-item absolute" style={{ top, left }}>
			{ children }	
		</div>
	, window.document.body)
}

export default FloatingItem;