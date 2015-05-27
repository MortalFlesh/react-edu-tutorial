import React from 'react';
import {addons} from 'react/addons';

const Blog = React.createClass({
    mixins: [addons.PureRenderMixin],

    propTypes: {
        messages: React.PropTypes.array.isRequired,
    },

    render() {
        const messages = this.props.messages.map((message) => {
            return <div>messageID = {message.id} | messageName = {message.name}</div>;
        });

        return (
            <div className="Blog">
                <div>
                    ... will render messagesFilter ...
                </div>

                <div>
                    ... will render messagesList ...
                    {messages}
                </div>

                <div>
                    ... will render messagesForm ...
                </div>
            </div>
        );
    }
});

export default Blog;
