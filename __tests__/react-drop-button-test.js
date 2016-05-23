jest.unmock('../dist/react-drop-button.js');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDropButton = require('../dist/react-drop-button');
var DropTrigger = ReactDropButton.DropTrigger;
var DropBoxContent = ReactDropButton.DropBoxContent;
var TestUtils = require('react-addons-test-utils');

//need to dispatch 'click' event manually in phantomjs
function clickMe(el){
    var ev = document.createEvent('MouseEvent');
    ev.initMouseEvent(
        'click',
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}

describe('ReactDropButton', function() {
  var component, outsideComponent, hooks, domNode, outsideDomNode;

  beforeEach(function() {
    hooks = {
      handleOpen: function(){
        return true;
      }
    };
    spyOn(hooks, 'handleOpen');
    component = TestUtils.renderIntoDocument(
    <ReactDropButton label="foo" transitionOn={false} onOpen={hooks.handleOpen}>
      <DropTrigger>Open menu</DropTrigger>
      <DropBoxContent>
        Menu content here.
      </DropBoxContent>
    </ReactDropButton>
    );
    domNode = ReactDOM.findDOMNode(component);

    outsideComponent = TestUtils.renderIntoDocument(
      <div id='outside-click'> click this to close the drop box</div>
    );
    outsideDomNode = ReactDOM.findDOMNode(outsideComponent);

  });

  it('should render', function() {
    expect(domNode).toBeDefined();
  });

  it('should render the drop trigger as closed', function() {
    expect(domNode.getElementsByClassName('closed rdb-button')[0]).toBeDefined();
    expect(component.refs.dropBox).toBeUndefined();
  });


  describe('opening and closing the drop button', function() {
    beforeEach(function() {
      //open it
      TestUtils.Simulate.click(ReactDOM.findDOMNode(component.refs.button));
    });

    it('should open the drop box when the drop trigger is clicked', function() {

      expect(domNode.getElementsByClassName('open rdb-button')[0]).toBeDefined();
      expect(component.refs.dropBox).toBeDefined();
      expect(hooks.handleOpen.calls.count()).toEqual(1);
    });

    it('should close an already open drop box when the drop trigger is clicked', function() {

      //close it
      TestUtils.Simulate.click(ReactDOM.findDOMNode(component.refs.button));
      expect(component.refs.dropBox).toBeUndefined();
      expect(hooks.handleOpen.calls.count()).toEqual(1);

    });

    it('should close an already open drop box when the user clicks outside of the component', function() {

      //had to create custom dispatcher to dispatch the 'click' event to the listener
      clickMe(document.getElementsByTagName('body')[0]);
      expect(component.refs.dropBox).toBeUndefined();
      expect(hooks.handleOpen.calls.count()).toEqual(1);
    });
    
  });

});
