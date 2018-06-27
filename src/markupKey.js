import React from 'react';
import Collapsible from 'react-collapsible';

const text=`Heading 
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

var array=text.split('\n');
var userMarkupKey = array.reduce(function(accumulator, currentValue) {
   return accumulator + currentValue+ "<br>"
},"");

function MarkupKey(){
    // React Element to present (Collapsible) helpful MarkupKeyText.
       return (
       <Collapsible trigger="Show/Hide Key">
       <div dangerouslySetInnerHTML={{__html: userMarkupKey}} />
     </Collapsible>);
}
export {MarkupKey, text};
