"use strict";
function get(uri) {
    return fetch(uri)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
        return err;
    });
}
exports.get = get;
function post(uri, data) {
    return fetch(uri, { body: data })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
        return err;
    });
}
exports.post = post;
