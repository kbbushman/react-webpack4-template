import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// For webpack.config.js HotModuleReplacemntPlugin
module.hot.accept();
