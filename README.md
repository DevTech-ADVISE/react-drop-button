# react-drop-button [![Build Status](https://travis-ci.org/BI/react-drop-button.png)](https://travis-ci.org/BI/react-drop-button)

A "drop button" to show/hide content on button click. Hides on "click away" as well. You can add custom content to the header(DropBoxTrigger) and the content panel(DropBoxContent). [Demo It](http://BI.github.io/react-drop-button/)

##Properties
###Optional
* **layoutMode**: (Layout choice) The layout orientation for the drop box content. Choices are DropButton.ALIGN_CONTENT_SE, DropButton.ALIGN_CONTENT_NE, DropButton.ALIGN_CONTENT_SW, DropButton.ALIGN_CONTENT_NW. 
The drop box will pop out from one of these four directions in relation to the DropButton. The default position is South East meaning the content pops out from the bottom left of the DropButton. 

JSX:
```js
<DropButton>
	<DropTrigger ><div className="chevron">{" >"}</div> Custom<span className="bold-text"> button content</span></DropTrigger>
	<DropBoxContent>
		Custom drop down content with a 160px min-width
		<ul>
			<li>list item 1</li>
			<li>list item 2</li>
		</ul>
	</DropBoxContent>
</DropButton>
```

## Development

* Development server `npm run dev`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
