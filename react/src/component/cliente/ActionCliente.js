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
        console.log("res.status ActionCliente",res.status);
        if(res.status === 200) {
          window.alert('UPDATE CLIENTE SUCCESSFUL');
          return res;
        } else {
          window.alert('ERROR UPDATE');
        }
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
        if(res.status === 200) {
          window.alert('CREATE CLIENTE SUCCESSFUL');
          return res;
        } else {
          window.alert('ERROR CREATE');
        }
    }).catch(err => {
        console.error(err);
    });
}

export function deleteBlogPost(id) {
    return fetch("/cliente/" + id, {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => {
      if(res.status === 200) {
        window.alert('DELETE CLIENTE SUCCESSFUL');
        return res;
      } else {
        window.alert('ERROR DELETE');
      }
    }).catch(err => err);
}
