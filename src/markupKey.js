import React from "react";

const text = `Heading 
=======

Sub-heading
-----------
### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

* apples
* oranges
* pears

Numbered list:

1. apples
2. oranges
3. pears

The rain---not the reign---in
Spain.

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

var array = text.split("\n");
var key = array.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue + "<br>";
}, "");

const UserKey = () => <div dangerouslySetInnerHTML={{ __html: key }} />;

export { text, UserKey };
