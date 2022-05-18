import './Task.css'

const Task = ({id, title, body, loading, error}) => {
  return (
    <div className="Task-wrapper">
      <h3>{id} - {title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Task
