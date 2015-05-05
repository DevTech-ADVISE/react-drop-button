var React = require('react/addons');
var ReactDropButton = require('./lib/react-drop-button.jsx');
var DropButton = ReactDropButton.DropButton;
var DropTrigger = ReactDropButton.DropTrigger;
var DropBoxContent = ReactDropButton.DropBoxContent;

React.render(
	<div>
		<DropButton label="hihi_bottom">
			<DropTrigger ><div className="chevron">{" >"}</div> Hello from Below</DropTrigger>
			<DropBoxContent>
				When content is placed at the bottom of the page it would be nice to sense with Javascript.  This .rdd-drop-box has a min-width of 210px.
			</DropBoxContent>
		</DropButton>

		<DropButton label="hihi_right">
			<DropTrigger ><div className="chevron">{" >"}</div> HI</DropTrigger>
			<DropBoxContent>
				When content is on the edge of the page it would be nice to sense with Javascript.
			</DropBoxContent>
		</DropButton>

		<DropButton label="hihi">
			<DropTrigger ><div className="chevron">{" >"}</div> Custom<span className="bold-text"> button content</span></DropTrigger>
			<DropBoxContent>
				Custom drop down content with a 160px min-width
				<ul>
					<li>whatev1</li>
					<li>whatev2</li>
				</ul>
			</DropBoxContent>
		</DropButton>
	</div>
	, document.getElementById('main'));

