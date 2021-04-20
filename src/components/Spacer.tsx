/** REACT */
import React from "react";

interface Props {
	/**
	 * height: Optional height of the component.
	 */
	height?: number;
	/**
	 * width: Optional width of the component.
	 */
	width?: number;
}

/**
 * **Spacer component for margins**
 * 
 * *Takes in optional height and width props*
 * @param height - Represents the pixel value of the height of the Spacer component
 * @param width - Represents the pixel value of the width of the Spacer component 
 */

const Spacer: React.FC<Props> = ({ height = 0, width = 0 }) => {
	return (
		<div
			style={{ height: `${height}px`, width: `${width}px` }}
		/>
	);
};

export default Spacer;