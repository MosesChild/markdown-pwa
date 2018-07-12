import React from "react";
import marked from "marked";

function MarkupViewer(props) {
  // React Element for presenting user text as markup.
  return (
    <div 
      className="viewer" filename={props.filename} 
      dangerouslySetInnerHTML={{ __html: marked(props.value) }}
    />
  );
}

/*
class MarkupViewer extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <div 
        className="viewer" filename={this.props.filename}  
        dangerouslySetInnerHTML={{ __html: marked(this.props.value) }}
      />
    );
  }
}
*/
export { MarkupViewer };
