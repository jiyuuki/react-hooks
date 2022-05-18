import { useState, useEffect } from 'react';
import Lane from '../../components/Lane/Lane';
import useDataFetching from '../../hooks/useDataFetching';
import './Board.css';

const lanes = [
  {
    id: 1,
    title: 'To Do'
  }, {
    id: 2,
    title: 'In Progress'
  }, {
    id: 3,
    title: 'Review'
  }, {
    id: 4,
    title: 'Done'
  },
];

function onDragStart(e, id) {
  e.dataTransfer.setData('id', id);
}

function onDragOver(e) {
  e.preventDefault();
}

function Board() {
  const [ loading, error, data ] = useDataFetching('http://localhost:8000/tasks')
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    setTasks(data)
  }, [data])

  function onDrop(event, laneId) {
    const id = event.dataTransfer.getData('id')

    const updatedTasks = tasks.filter(task => {
      if(task.id === id) {
        task.lane = laneId
      }
      return task
    })
    console.log({ updatedTasks })
    setTasks(updatedTasks)
  }

  return (
    <div className='Board-wrapper'>
      {
        lanes.map((lane) => (
          <Lane key={lane.id}
            laneId={lane.id}
            title={lane.title}
            loading={loading}
            error={error}
            tasks={tasks.filter(task => task.lane === lane.id)}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
          />
        ))
      }
    </div>
  );
}

export default Board;
