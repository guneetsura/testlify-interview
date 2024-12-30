import React from 'react'
import './GlobalNav.scss'
import timetracker from '../../assets/icons/time-track.png'
import overview from '../../assets/icons/overview.svg'
import groups from '../../assets/icons/groups.svg'
import settings from '../../assets/icons/settings.svg'
import help from '../../assets/icons/help.svg'

const GlobalNav = () => {
  return (
    <nav className="global-nav">
        <a className='logo'>
            <img src={timetracker} alt="time tracker" />
        </a>
        <a className='icon'>
            <img src={overview} alt="overview" />
        </a>
        <a className='icon'>
            <img src={groups} alt="groups" />
        </a>
        <a className='icon'>
            <img src={settings} alt="settings" />
        </a>
        <a className='help-circle icon'>
            <img src={help} alt="help" />
        </a>
    </nav>
  )
}

export default GlobalNav