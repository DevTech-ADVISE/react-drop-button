var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var ReactDropButton = require('../lib/react-drop-button.jsx');
var DropTrigger = ReactDropButton.DropTrigger;
var DropBoxContent = ReactDropButton.DropBoxContent;

describe("ReactDropButton", function() {
  var component, outsideComponent;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
		<ReactDropButton transitionOn={false}>
			<DropTrigger>Open menu</DropTrigger>
			<DropBoxContent>
				Menu content here.
			</DropBoxContent>
		</ReactDropButton>
    );

    outsideComponent = TestUtils.renderIntoDocument(
    	<div id="outside-click"> click this to close the drop box</div>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toMatch('react-drop-button');
  });

  it("should render the drop trigger as closed", function() {
  	expect(component.getDOMNode().getElementsByClassName("closed rdb-button")[0]).toBeDefined();
  	expect(component.refs.dropBox).toBeUndefined();
  });


  describe("opening and closing the drop button", function() {
  	beforeEach(function() {
  		//open it
	  	TestUtils.Simulate.click(component.refs.button.getDOMNode());
  	});

  	it("should open the drop box when the drop trigger is clicked", function() {
			
	  	expect(component.getDOMNode().getElementsByClassName("open rdb-button")[0]).toBeDefined();
	  	expect(component.refs.dropBox).toBeDefined();
	  });

	  it("should close an already open drop box when the drop trigger is clicked", function() {

	  	//close it
	  	TestUtils.Simulate.click(component.refs.button.getDOMNode());
	  	expect(component.refs.dropBox).toBeUndefined();

	  });

	  it("should close an already open drop box when the user clicks outside of the component", function() {

	  	TestUtils.Simulate.click(outsideComponent.getDOMNode());
	  	//expect(component.getDOMNode().getElementsByClassName("closed rdb-button")[0]).toBeDefined();
	  });
  });


  
});
