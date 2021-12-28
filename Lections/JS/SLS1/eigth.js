// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(console.log());

// function timer(y){
//     return new Promise(resolve => {
//         setTimeout(resolve, y);
//     });
// }

// timer(1000)
// .then(x => console.log(1))

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => timer(1000))
// .then(x => console.log)

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => [timer(1000)])
// .then(x => {
//     console.log(123123123);
//     return x[0].then(_ => console.log(213))
// });

// function makeCard(post){
//     let $card = document.createElement('div');
//     let $title = document.createElement('div');
//     $title.innerHTML = post.title;
//     $card.appendChild($title);
//     let $body = document.createElement('div');
//     $body.innerHTML = post.body;
//     $card.appendChild($body);
//     let $user = document.createElement('button');
//     $user.innerHTML = 'Show user';
//     $user.addEventListener('click',function(){
//        fetch('https://jsonplaceholder.typicode.com/users/'+ post.userId)
//            .then(response => response.json())
//            .then(function(user){
//               $user.innerHTML = user.username;
//            });
//     });
//     $card.appendChild($user);
// let $comment = document.createElement('button');
//     $comment.innerHTML = 'Show comments';
//     $comment.addEventListener('click',function(){
//         fetch('https://jsonplaceholder.typicode.com/comments?postId='+ post.id)
//             .then(response => response.json())
//             .then(function(comments){
//                 $comment.innerHTML = comments.map(x => x.body).join('');
//             });
//     });
//     $card.appendChild($comment);
//     return $card;
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(function (posts) {
//         for(let post of posts){
//             let $card = makeCard(post);
//             document.body.appendChild($card);
//         }
//     });


let i = 1;
let $add = document.querySelector('.add');
let $emails = document.querySelector('.emails');

$emails.addEventListener('click', function(e){
    e.preventDefault();
    if (e.target.classList.concains('delete')){
        e.target.parentNode.remove();
    }
})

function  makeInput(){
    let index = 'email-' + ++i;

    let $div = document.createElement('div');

    let $label = document.createElement('label');
    $div.appendChild($label);
    $label.for = index;
    $label.innerHTML = index;

    let $input = document.createElement('input');
    $div.appendChild($input);

    $input.id = index;
    $input.name = index;

    let $delete = document.createElement('button');
    $delete.innerHTML = 'delete';
    $delete.classList.add('delete');
    $div.appendChild($delete);

    $emails.appendChild($div);
}

$add.addEventListener('click', function(e){
    e.preventDefault();
})

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    let $emails = document.querySelector('.emails');
    let emails = [];
    for(let $email of $emails){
        emails.push($email.value);
    }

    let result = {
        name: document.querySelector('#name').value,
        surname: document.querySelector('#surname').value,
        emails,
    };
    console.log(result);
})