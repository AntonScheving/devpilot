import React, { useState, useEffect } from 'react'



const FilterSearch = () => {

    const [search, setSearch] = useState([]);

    useEffect(() => {
      fetch('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6c3aabdd&app_key=0f15a296c6a265d2e7c0fb2fbe7cb467&results_per_page=10&what=junior%20developer')
         .then(response => {return response.json()})
         .then(data => {setSearch(data.results)})
         .catch((err) => {
            console.log(err.message)
         })
   }, [])

  return (
    
        <div className='filter-container'>
        
            {search.map((job) => {
          return(
        <div className='form' key={job.id}>
            <input type='search' value={job.location.display_name}></input>
        </div>
              )
})}
    </div>

    
  )
}

export default FilterSearch;


