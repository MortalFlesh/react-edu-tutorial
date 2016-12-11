import Immutable from 'immutable';
import State from './../lib/state';
import * as actions from './actions';
import loader from './../lib/loader';

const basicData = Immutable.fromJS({
    blog: {
        messages: [],
    }
});

const appState = new State(basicData);

export default appState;
export const state = appState;

export const blogCursor = appState.cursor(['blog']);

export function loadAsyncData() {
    loader.loadMessages().then((messages) => {
        messages.forEach((message) => {
            actions.addMessage(message);
        });
    });
}