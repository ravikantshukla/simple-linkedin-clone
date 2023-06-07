import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://media.istockphoto.com/id/1391222993/photo/a-small-flower-on-a-blue-background-with-blurry-lights-and-copy-space.jpg?s=1024x1024&w=is&k=20&c=4sko2pw99MocsoKaXae9d4xgYdlGAGvXgSViiFkxYf0=' alt=''/>
            <Avatar />
            <h2>Ravi Kant Shukla</h2>
            <h4>ravikant@gmail.com</h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>230</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>230</p>
            </div>        
        </div>
        <div className='sidebar__button'>
            <p>Recent</p>
        </div> 
    </div>
  )
}

export default Sidebar