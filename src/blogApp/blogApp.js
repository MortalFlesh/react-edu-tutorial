import React from 'react';
import * as store from './store';
import * as actions from './actions';
import state from './state';
import Blog from './../blog/blog';

const BlogApp = React.createClass({
    componentDidMount() {
        state.on('change', () => {
            this.forceUpdate();
        });
    },

    render() {
        const messages = store.getMessages().toJS();

        return (
            <div className="BlogApp">
                <Blog messages={messages}/>
            </div>
        );
    }
});

export default BlogApp;
