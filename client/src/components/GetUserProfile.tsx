import * as React from 'react'
import axios from 'axios'

const { useState, useCallback } = React

function searchGithub(query: string) {
  return axios.get(`https://api.github.com/users/${query}`).then(res => res)
}

export function FetchProfile() {
  const [searchValue, setSearchValue] = useState('')
  const [profile, setProfile] = useState(undefined)
  const [statusCode, setStatusCode] = useState(0)

  const onChangeInput = useCallback(e => setSearchValue(e.target.value), [])

  const onButtonClick = useCallback(
    () => {
      searchGithub(searchValue)
        .then((profile: any) => {
          setProfile(profile), setStatusCode(profile.status)
        })
        .catch(err => setStatusCode(err.response.status))
    },
    [searchValue]
  )

  const searchUser = useCallback(
    e => {
      e.preventDefault()
      onButtonClick()
    },
    [searchValue]
  )

  return (
    <form onSubmit={searchUser}>
      <div>
        {statusCode === 404 ? <p>That user does not exist</p> : displayUserProfile(profile)}

        <input type="text" onChange={onChangeInput} placeholder="Search for a user" />
        <br />
        <button onClick={searchUser}>Search</button>
      </div>
    </form>
  )
}

function displayUserProfile(profile: any) {
  return profile !== undefined ? <p>User {profile.data.login} exists</p> : null
}
