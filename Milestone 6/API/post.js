function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
      .then(response => response.json())
      .then(data => display(data))

}

function display(data){
    const posts = document.getElementById('load-post');
    for(const post of data){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post-style');
        div.innerHTML = `
            <h3>user id: ${post.userId}</h3>
            <h4>title: ${post.title}</h4>
            <p>post: ${post.body}</p>
        `
        posts.appendChild(div);

    }
}
loadData();