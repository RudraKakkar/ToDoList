import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <div> 
    <Todo/>
    </div>
  )
}

export default App





























// import React, { useState } from 'react';
// import './App.css';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const addTodo = () => {
//     if (newTodo.trim() !== '') {
//       setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
//       setNewTodo('');
//     }
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <div>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Enter a new todo"
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(todo.id)}
//             />
//             <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }

// export default App;
