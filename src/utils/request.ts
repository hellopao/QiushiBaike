"use strict";

export function get(uri: string) {
    return fetch(uri)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            return err;
        })
}

export function post(uri: string, data: any) {
    return fetch(uri, {body: data})
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            return err;
        })
}