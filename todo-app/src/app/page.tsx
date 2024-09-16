import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Todo App</h1>
      <TodoList />
    </div>
  )
}