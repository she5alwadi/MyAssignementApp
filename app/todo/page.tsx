import TodoList from '../../components/TodoList';

export default function TodoPage() {
  return (
    <div>
      <h1>Todo List Page</h1>
      <TodoList initialTodos={[]} />
    </div>
  );
}