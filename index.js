var React = require('react');
var ReactDropButton = require('./lib/react-drop-button.jsx');
var DropButton = ReactDropButton.DropButton;
var DropTrigger = ReactDropButton.DropTrigger;
var DropBoxContent = ReactDropButton.DropBoxContent;

React.render(
	<div>
		<DropButton label="hihi">
			<DropTrigger >Custom<span className="bold-text"> button content</span><div className="chevron">{" >"}</div></DropTrigger>
			<DropBoxContent>

				<ul>Custom drop down content
					<li>whatev1</li>
					<li>whatev2</li>
				</ul>
			</DropBoxContent>
		</DropButton>
		
	</div>
	, document.getElementById('main'));

