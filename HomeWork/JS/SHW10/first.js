let url = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest(url){
    return new Promise(function(resolve, reject){
        let xml = new XMLHttpRequest();
        xml.open('get', url);
        xml.onload = function(){
            resolve(xml.response);
        }
        xml.send();
    });
}

sendRequest(url)
    .then(response => JSON.parse(response))
    .then(posts => {
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
    })