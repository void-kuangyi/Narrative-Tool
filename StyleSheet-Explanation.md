This is to explain the CSS style used in the twine interface and what their function is.

```
.passage {
  color: black;
}
```
Defines the passages' text color to be black.

```
#story {
  // defines the background color of the passage to be white
  background-color: white; 
  margin: auto;
  // defines the width of the passage to adjust to the content
  width: fit-content; 
  // defines the gap between the passage and the text
  padding: 22px 30px 33px 30px; 
  // gives the passage container a round corner
  border-radius: 8px; 
}
```
Defines the attributes of passages.

```
#ui-bar {
  display: none;
}
```
There was a default side bar because of the snowman format. This line is to hide the side bar.

```
body {
  // defines the background color of the webpage to be #F4FCFF.
  background-color: #F4FCFF;
  // defines the gap between the webpage and the passage.
  padding-top: 12px;
  padding-bottom: 12px;
}
```
Defines the attribute of the webpage.

```
.link-internal {
  display: inline-block;
  // removes the underline
  text-decoration: none;
  // gives the button a round corner
  border-radius: 8px;
  // gives the button's border solid line
  border-style:solid;
  // defines the gap between the button's border and its text
  padding: 10px 12px 10px 12px;
}
```
Defines the attributes of the button.

```
.link-internal:hover {
  // defines the background color of the button when hovering
  background-color: #68d;
  // defines the button's text color when hovering
  color: white;
  text-decoration: none;
}
```
Defines the attributes of the button when hovering.

```
img {
 // The below makes sure the image resizes when the webpage resizes
 max-width:100%;
 height: auto;
 // defines the image corner to be rounded
 border-radius: 8px;
}
```
Defines the attributes of the image.

```
textarea {
  width: 100%;
  min-width: 10%;
  border-radius: 8px;
  resize: none;
  box-sizing:border-box;
  // define box border 
  border: 1px solid #D3D3D3;
  // define the text color
  color: black;
}
```
Defines the attributes of the text input when it is not hovered or focused.

```
textarea:not(:disabled):hover, textarea:not(:disabled):focus{
  background-color: white;
  color: black;
  border: 1px solid black;
  box-sizing:border-box;
  outline: none;
}
```
Defines the attributes of the text input when the user hovers or inputs.
