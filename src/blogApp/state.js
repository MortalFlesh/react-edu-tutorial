import Immutable from 'immutable';
import State from './../lib/state';
import * as actions from './actions';

const basicData = Immutable.fromJS({
    blog: {
        messages: [
            {
                id: 1,
                name: 'Message one',
            },
            {
                id: 2,
                name: 'Message two',
            },
        ],
    }
});

const appState = new State(basicData);

export default appState;
export const state = appState;

export const blogCursor = appState.cursor(['blog']);
