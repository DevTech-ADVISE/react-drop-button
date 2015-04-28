var React = require('react');
var TestUtils = React.addons.TestUtils;
var ReactDropButton = require('../lib/react-drop-button.jsx');


describe("ReactDropButton", function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <ReactDropButton name="Jonh"/>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toEqual('react-drop-button');
  });
});
