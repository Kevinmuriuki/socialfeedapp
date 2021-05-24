import React from 'react'

export default function CloseFriend({user}) {
  const style = {
    width: 40,
    height: 40
  }
  return (
    <li className="mb-4">
      <img src={user.profilePicture} alt="" className="rounded-circle img-fluid" style={style} />
      <span className="mx-2">{user.username}</span>
    </li>
  )
}
