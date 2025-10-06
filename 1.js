function fetchData(url, callback) {
  fetch(url)
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err));
}


function getPostsSortedByTitleLengthDesc(callback) {
  fetchData('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
    if (err) return callback(err);
    const sorted = posts.sort((a, b) => b.title.length - a.title.length);
    callback(null, sorted);
  });
}


function getCommentsSortedByName(callback) {
  fetchData('https://jsonplaceholder.typicode.com/comments', (err, comments) => {
    if (err) return callback(err);
    const sorted = comments.sort((a, b) => a.name.localeCompare(b.name));
    callback(null, sorted);
  });
}
