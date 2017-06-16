import React from 'react';
import {render} from 'react-dom';
import './lib/stateDebugger';
import BlogApp from './blogApp/blogApp';

window.tutorial.debug.logStart();

render(<BlogApp/>, document.getElementById('blog'));
