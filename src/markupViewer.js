
import React from 'react';
import marked from 'marked';

function MarkupViewer(props) {
   // React Element for presenting user text as markup.
  return <div className="viewer" dangerouslySetInnerHTML={{__html : marked(props.value) }} />;
}

export {MarkupViewer}