import fetch from 'isomorphic-fetch';

export function fetchBlogPosts() {
  return fetch("/cliente", {
      method: 'GET',
      mode: 'CORS'
  }).then(res => res.json())
  .catch(err => err);
}

export function fetchBlogPost(id) {
    return fetch("/cliente/" + id, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}

export function updateBlogPost(id, data) {
    return fetch("/cliente/" + id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => {
        console.error(err);
    });
}

export function createBlogPost(data) {
    return fetch("/cliente", {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteBlogPost(id) {
    return fetch("/cliente/" + id, {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => {
        return res;
    }).catch(err => err);
}