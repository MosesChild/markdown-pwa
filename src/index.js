import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MarkUpEditor from './markUp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MarkUpEditor />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
