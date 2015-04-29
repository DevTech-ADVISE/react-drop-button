var React = require("react");

var dropBoxClassName = 'rdd-drop-box';

require("./react-drop-button.scss");

module.exports ={};

var DropButton = React.createClass({
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
	getChildElementByType: function(type) {
		var children = this.props.children;
		return children.filter(function(childElement) {return childElement.type.displayName === type;});
	},
	toggleDropBox: function() {
		this.setState({open: !this.state.open});
	},
	alert1: function() {
		alert("1");
	},
	handleOutsideClick: function(event) {
		var dropBoxDOM = this.refs.dropBox && this.refs.dropBox.getDOMNode();
		var buttonDOM = this.refs.button.getDOMNode();
		//if the click was within the dropdown box panel dont close it
		if( (dropBoxDOM && dropBoxDOM.contains(event.target)) || (buttonDOM && buttonDOM.contains(event.target)) || !this.state.open)
			return;
		//close the box
		this.toggleDropBox();
	},
	render: function() {
		var dropBox = '', buttonStatus = "closed";
		var dropBoxContent = null;
		
		var dropTrigger = null;
		dropBoxContent = this.getChildElementByType("DropBoxContent");
		dropTrigger = this.getChildElementByType("DropTrigger");
		
		if(this.state.open) {
			dropBox = (<div ref={"dropBox"} className={dropBoxClassName}>{dropBoxContent}</div>);
			buttonStatus = "open";
		}

		return (
			<div className="react-drop-button">
				<div ref={"button"} className={buttonStatus + " rdd-button"} onClick={this.toggleDropBox}>
					{dropTrigger}
					
				</div>
				{dropBox}
			</div>
		);
	}
});

var DropTrigger = React.createClass({
	render: function() {
		return (
			<div className="drop-trigger">
				{this.props.children}
			</div>
		);
	}
});

var DropBoxContent = React.createClass({
	render: function() {
		return (
			<div className="drop-box-content">
				{this.props.children}
			</div>
		);
	}
})

module.exports.DropButton = DropButton;
module.exports.DropTrigger = DropTrigger;
module.exports.DropBoxContent = DropBoxContent;


