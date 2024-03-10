import React from 'react'

export default function Profile() {
  return (
    <div className="continer">
      <div className='Profile-block-all'>
        <div className="Profile-block">
          <h1>Welcome</h1>
          <div className="name-input">
            <label className="name">Name:</label>
            <input type="text" id="name" name="user_name" />
          </div>
          <div className="name-input">
            <label className="name">Email:</label>
            <input type="text" id="name" name="user_name" />
          </div>
          <div className="name-input">
            <label className="name">Password:</label>
            <input type="password" id="name" name="user_name" />
          </div>
          <button >Termination</button>
        </div>

      </div>
    </div>
  )
}
