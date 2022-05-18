import { useState, useEffect} from 'react'
import Lane from '../../components/Lane/Lane'
import useDataFetching from '../../hooks/useDataFetching'

import './Board.css'

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' },
];

function Board() {

  const [loading, error, tasks] = useDataFetching('http://localhost:8000/tasks')

  return (
    <>
      <h2>Board</h2>
      <div className='Board-wrapper'>
        {lanes.map((lane) => (
          <Lane
            key={lane.id}
            title={lane.title}
            loading={loading}
            tasks={tasks.filter(task => task.lane === lane.id)}
            error={error}
          />
        ))}
      </div>
    </>
  );
}

export default Board
