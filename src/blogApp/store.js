import * as actions from './actions';
import {blogCursor} from './state';
import dispatcher from './../lib/dispatcher';
import {List, Record} from 'immutable';

const MessageRecord = new Record({
    id: 0,
    name: '',
});

export const dispatchToken = dispatcher.register(({action, data}) => {
    switch (action) {
        case actions.addMessage:
            let messages = Immutable.List(getMessages());

            messages = messages.push(new MessageRecord(data).toMap());

            setToCursor('messages', messages);
            break;
    }
});

function setToCursor(name, value) {
    blogCursor((blog) => blog.set(name, value));
}

export function getMessages() {
    return blogCursor().get('messages');
}
