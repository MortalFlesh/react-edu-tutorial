import React from 'react';

class Blog extends React.Component {
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
}

export default Blog;
