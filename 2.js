function getUsersFiltered() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>
      users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
      }))
    );
}

function getTodosWithCompletedFalse() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(todos => todos.filter(todo => !todo.completed));
}
