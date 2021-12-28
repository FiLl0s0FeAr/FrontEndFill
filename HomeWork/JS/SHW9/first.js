let url = 'posts';

function getRequestURL(resource) {
    let site = 'https://jsonplaceholder.typicode.com/' + resource;
    return site;
}

function get(url, callback) {
    let xhttp = new XMLHttpRequest();   
    xhttp.open('get', url);
    xhttp.onload = function () {
        let json = JSON.parse(xhttp.response);
        callback(json);
    };
    xhttp.send();
}

get(getRequestURL('posts'), function (posts) {
    for (let post of posts) {
        let $post = document.createElement('div');
        $post.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.title}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>`;

        $post.addEventListener('click', function () {
            get(getRequestURL('users/' + post.userId), function (user) {
                console.log(user);
            });
        });
        document.body.appendChild($post);
    }
});