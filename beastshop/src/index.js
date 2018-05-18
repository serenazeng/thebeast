import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './router.config';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterConfig />, document.getElementById('root'));
registerServiceWorker();
