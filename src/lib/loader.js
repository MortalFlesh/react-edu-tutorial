class Loader {
    loadMessages() {
        return Promise.resolve([
            {
                id: 1,
                name: 'Message one',
            },
            {
                id: 2,
                name: 'Message two',
            },
        ]);
    }
}

export default new Loader();
