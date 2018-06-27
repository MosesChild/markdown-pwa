import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import {text, MarkupKey} from './markupKey';
import {MarkupViewer} from './markupViewer';

class MarkUpEditor extends React.Component {
   // React Class Component represents entire Mark up editor and viewer.
   constructor(props) {
      super(props);
      this.state = {
         value: text,
         userclicked: "false"
      };
      this.handleChange = this.handleChange.bind(this);
   }
   handleChange(event) {
      if (this.state.userclicked==="false"){
         this.setState({value: "", userclicked: "true"})
      } else {
        // should clean on input!
      const cleanedMarkupForDOM=DOMPurify.sanitize( marked( event.target.value ) );
      this.setState({value: cleanedMarkupForDOM})
      }
   }
 
  render() {
    return (
        <div className="editor">
            <textarea className="textInput" userclicked={this.state.userclicked} value={this.state.value} onChange={this.handleChange} />
            <div class="viewArea">
              <MarkupViewer value={this.state.value} />
              <MarkupKey />
            </div>
      </div>

    );
  }
}

export default MarkUpEditor;

   
