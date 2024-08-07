const todos = [
  {
    id: 1,
    text: "todo1",
    finished: true
  },
  {
    id: 2,
    text: "todo2",
    finished: false
  },
  {
    id: 3,
    text: "todo3",
    finished: true
  },
  {
    id: 4,
    text: "todo4",
    finished: false
  },
  {
    id: 5,
    text: "todo5",
    finished: false
  }
];

const delay = time => new Promise(resolve => setTimeout(resolve, time));
// 将方法延迟1秒
const withDelay = fn => async (...args) => {
  await delay(1000);
  return fn(...args);
};

// 获取todos
export const fetchTodos = withDelay(params => {
  const { query, tab } = params;
  let result = todos;
  // tab页分类
  if (tab) {
    switch (tab) {
      case "finished":
        result = result.filter(todo => todo.finished === true);
        break;
      case "unfinished":
        result = result.filter(todo => todo.finished === false);
        break;
      default:
        break;
    }
  }

  // 带参数查询
  if (query) {
    result = result.filter(todo => todo.text.includes(query));
  }

  return Promise.resolve({
    tab,
    result
  });
});

export const addTodo = withDelay(todo => {
  todos.push(todo);
  return Promise.resolve(true);
});

export const toggleTodo = withDelay(id => {
  const todoIndex = todos.findIndex(({ id: todoId }) => id === todoId);
  if (todoIndex !== -1) {
    const todo = todos[todoIndex];
    const newTodo = {
      ...todo,
      finished: !todo.finished
    };
    todos.splice(todoIndex, 1, newTodo);
  }
  return Promise.resolve(true);
});
