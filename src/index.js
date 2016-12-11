import './lib/stateDebugger';
import React from 'react';
import BlogApp from './blogApp/blogApp';
import {loadAsyncData} from './blogApp/state';

window.tutorial.debug.logStart();

loadAsyncData();

React.render(<BlogApp/>, document.getElementById('blog'));
