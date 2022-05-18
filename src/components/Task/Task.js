import './Task.css'

const Task = ({ id, title, body, loading, error, onDragStart }) => {
  return (
    <div
      className="Task-wrapper"
      draggable="true"
      onDragStart={event => onDragStart(event, id)}
    >
      <h3>{id} - {title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Task
