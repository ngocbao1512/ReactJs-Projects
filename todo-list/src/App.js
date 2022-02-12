import './App.css'
import { useState } from 'react'

function App() {
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleClick = () => {
    setJobs(prev => [...prev, job])
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
        >{job}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
