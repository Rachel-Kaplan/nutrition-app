function main(args) {
    return new Promise((resolve, reject) => {
        //const badNames = ['vista', 'empire', 'mbp'];
        if (badNames.includes(args.name)) {
            reject({ error: 'Existing product' });
        }

        resolve({ status: 'ok' });
    });
}