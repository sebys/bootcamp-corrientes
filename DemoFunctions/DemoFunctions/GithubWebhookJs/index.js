// Please visit http://go.microsoft.com/fwlink/?LinkID=761099&clcid=0x409 for more information on settting up Github Webhooks
module.exports = function (context, data) {
    var request = require('request');

    if (data)
    {
        var parameters = {
            title: data.issue.title,
            user: data.sender.login,
            avatar: data.sender.avatar_url,
            comment: data.comment.body
        };

        var requestData = {
            url: "GITHUB_WEBHOOK_URL",
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json"
            },
            body: parameters
        };

        request(requestData);

        context.res = {
            status: 200
        };
    }

    context.log(data.issue.title);
    context.log(data.sender.login);
    context.log(data.sender.avatar_url);
    context.log(data.comment.body);
    context.done();
};