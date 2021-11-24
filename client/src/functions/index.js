import * as api from '../api';
export const readTodos = async () => {
try {
const { data } = await api.readTodos()
return data
} catch (error) {
console.log(error)
}
}
export const createTodo = async (todo) => {
try {
console.log('createTodo at clientside',)
const { data } = await api.createTodo(todo);
console.log('functions', data)
return data;
} catch (error) {
console.log(error)
}
}