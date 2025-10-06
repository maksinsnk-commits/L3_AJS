async function processAll() {
 

 
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
  const postsSorted = posts.sort((a, b) => b.title.length - a.title.length);

 
  const comments = await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
  const commentsSorted = comments.sort((a, b) => a.name.localeCompare(b.name));

  
  const usersRaw = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  const usersFiltered = usersRaw.map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone
  }));

 
  const todosRaw = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
  const todosFiltered = todosRaw.filter(todo => !todo.completed);

  return {
    postsSorted,
    commentsSorted,
    usersFiltered,
    todosFiltered
  };
}
