import React from "react";
import "./blockTextInput.css";

class BlockTextInput extends React.Component {
	render() {
		return (
			<textarea id='block-input' placeholder='Put text to send text here' />
		);
	}
}
export default BlockTextInput;
