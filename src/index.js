import './lib/stateDebugger';
import React from 'react';
import BlogApp from './blogApp/blogApp';

window.tutorial.debug.logStart();

React.render(<BlogApp/>, document.getElementById('blog'));
