const delay = 1000;

const todos = [
    { message: "Comprar pan", completed: false },
    { message: "Ver curso Cory House", completed: true },
    { message: "Volver al gimnasio", completed: false },
    { message: "Arreglar la persiana", completed: false }
];

class TodoApi {
  static getAllTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(todos);
      }, delay);
    });
  }
}

export default TodoApi;