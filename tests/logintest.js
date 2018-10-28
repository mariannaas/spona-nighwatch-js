
module.exports = {
    tags: ['login','sanity'],
    'Login as admin' : function (client) {
        client.url(client.launchUrl);
        client.setValue('input[name=email]', 'marianna.ask@gmail.com');
        client.setValue('input[name=password]', '2468').pause(500);
        client.click('button[type=submit]');
        client.pause(2000);
        client.end();
    }
};
