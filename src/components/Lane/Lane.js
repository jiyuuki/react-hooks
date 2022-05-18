import './Lane.css';
import Task from '../Task/Task'

function Lane({ title, loading, error, tasks, onDragStart, onDragOver, onDrop, laneId }) {
  return (
    <div
      className='Lane-wrapper'
      draggable="true"
      onDragOver={onDragOver}
      onDrop={event => onDrop(event, laneId)}
    >
      <h2>{title}</h2>
      {loading || error ? (
        <span>{error || 'Chargement...'}</span>
      ) : (
          tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            onDragStart={onDragStart}
          />
         ))
      )}
    </div>
  )
}

export default Lane;
