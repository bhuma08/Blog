const form = document.querySelector('#mainForm');
const allBlogs = document.querySelector('#blogDiv');
form.addEventListener('submit', addBlog);

getAllBlogs();

function addBlog(e) {
    e.preventDefault();

    const data = {
        author: e.target.author.value,
        title: e.target.title.value,
        entry: e.target.entry.value
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }

    fetch('http://localhost:3000/blogs', options)
        .then(r => r.json())
        .then(appendBlog)
        .catch(console.warn)

}

function getAllBlogs () {
    fetch('http://localhost:3000/blogs')
        .then(r => r.json())
        .then(appendBlogs)
        .catch(console.warn)
}

// helpers
function appendBlogs(data){
    console.log(data)
    data.blogs.forEach(appendBlog);
};

let newBlog;

function appendBlog(data){
    const newBlog = document.createElement('h3');
    newBlog.textContent = `Name: ${data.author}, Title: ${data.title}, Entry: ${data.entry}`
    allBlogs.append(newBlog)
};