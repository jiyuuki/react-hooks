import './Backlog.css'
import Task from '../../components/Task/Task'
import useDataFetching from '../../hooks/useDataFetching'

const Backlog = () => {
  const [loading, error, tasks] = useDataFetching('http://localhost:8000/tasks')
  return (
    <>
      <h2>Backlog</h2>
      <div className='Backlog-wrapper'>
        {tasks.map((task) => (
          <Task
            id={task.id}
            key={task.id}
            title={task.title}
            body={task.body}
            error={error}
            loading={loading}
          />
        ))}
      </div>
    </>
  );
}

export default Backlog
