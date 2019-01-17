import * as React from 'react'
import axios from 'axios'

const { useState, useEffect } = React

function searchGithub(query: string) {
  return axios.get(`https://api.github.com/users/${query}`).then(res => res)
}

export default function displayProfile() {
  const [searchValue, setSearchValue] = useState('')
  const [profile, setProfile] = useState({})
  const handleChange = (e: any) => setSearchValue(e.target.value)
  console.log(profile)

  useEffect(
    () => {
      searchGithub(searchValue)
    },
    [profile, setProfile]
  )

  return (
    <div>
      <div>
        <input type="text" onChange={e => handleChange(e)} />
        <br />
        <button onClick={() => searchGithub(searchValue).then(profile => setProfile(profile))}>
          Search
        </button>
      </div>
    </div>
  )
}
