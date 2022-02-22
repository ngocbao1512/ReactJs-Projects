import './App.css'
import { useState } from 'react'
import ButtonDelete from './component/ButtonDelete'

function App() {

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => { 
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) ?? []
    return storageJobs 
  });

  const handleClick = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs)

      localStorage.setItem('jobs', jsonJobs)

      return [...prev, job];
    })
    setJob('')
  }


  const deleteJob = (job) => {

    setJobs(prev => {
      const newJobs1 = prev.filter(item => item !== job);

      const jsonJobs1 = JSON.stringify(newJobs1)

      localStorage.setItem('jobs', jsonJobs1)

      return newJobs1;
    })
  }

  return (
    <div id="wrapper">
      <input 
        value = {job}
        onChange={e => setJob(e.target.value)}
        class="input"
      />
      <button onClick={handleClick} class="button-add">Add to list</button>

      <ul class="job-render">
        {jobs.map((job, index) => (
        <li 
        key = {index} 
        class="job" 
        >
          {job}
          <ButtonDelete
            functionDelete = {() => deleteJob(job)}
          />
        </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
