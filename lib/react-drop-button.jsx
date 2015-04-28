var React = require("react");

var dropBoxClassName = 'rdp-drop-box';

require("./react-drop-button.scss");


module.exports = React.createClass({
  props: {
		label: React.PropTypes.string.isRequired
	},
	getInitialState: function() {
		return {open: false};
	},
	componentWillMount: function() {
		//bubble events up to the top
		document.body.addEventListener("click", this.handleOutsideClick, false);
	},
	componentWillUnmount: function() {
		//remove the listener when the component isn't mounted to a DOM node
		document.body.removeEventListener("click", this.handleOutsideClick);
	},
	toggleDropBox: function() {
		this.setState({open: !this.state.open});
	},
	handleOutsideClick: function(event) {
		var dropBoxDOM = this.refs.dropBox && this.refs.dropBox.getDOMNode();
		var buttonDOM = this.refs.button.getDOMNode();
		//if the click was within the dropdown box panel dont close it
		if( (dropBoxDOM && dropBoxDOM.contains(event.target)) || (buttonDOM && buttonDOM == event.target) || !this.state.open)
			return;
		this.setState({open: false});
	},
	render: function() {
		var dropBox = '', buttonStatus = "closed";
		if(this.state.open) {
			dropBox = (<div ref={"dropBox"} className={dropBoxClassName}>{this.props.children}</div>);
			buttonStatus = "open";
		}

		return (
			<div className="react-drop-button">
				<button ref={"button"} className={buttonStatus} onClick={this.toggleDropBox}>{this.props.label}</button>
				{dropBox}
			</div>
		);
	}
});
