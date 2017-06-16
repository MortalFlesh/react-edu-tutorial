import React from 'react';
import * as store from './store';
import * as actions from './actions';
import state from './state';
import Blog from './../blog/blog';

export default class BlogApp extends React.Component {
    componentDidMount() {
        state.on('change', () => {
            this.forceUpdate();
        });
    }

    render() {
        const messages = store.getMessages().toJS();

        return (
            <div className="BlogApp">
                <Blog messages={messages}/>
            </div>
        );
    }
}
