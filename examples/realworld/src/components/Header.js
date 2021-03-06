import { component, createSub } from 'framework-x'
import React from 'react'
import { APP_NAME } from '../constants'
import { routeIds as routes } from '../routes'
import { getUser } from '../user/selectors'
import { Link, NavLink } from './Link'


const Navbar = component('Navbar', createSub({ getUser }),
  ({ user: { username, image } = {} }) =>
    <ul className="nav navbar-nav pull-xs-right">
      <NavLink to={[routes.HOME]}>Home</NavLink>
      {username ? [
        <NavLink key={0} to={[routes.EDITOR]}><i className="ion-compose" />{" "}New Post</NavLink>,
        <NavLink key={1} to={[routes.SETTINGS]}><i className='ion-gear-a' />{" "}Settings</NavLink>,
        <NavLink key={2} to={[routes.USER, { username }]}>
          <img src={image} className="user-pic" alt={username} />
          {username}
        </NavLink>
      ] : [
        <NavLink key={0} to={[routes.LOGIN]}>Sign in</NavLink>,
        <NavLink key={1} to={[routes.REGISTER]}>Sign up</NavLink>
      ]}
    </ul>
)

export const Header = () =>
  <nav className="navbar navbar-light">
    <div className="container">
      <Link to={[routes.HOME]} className="navbar-brand">{APP_NAME.toLowerCase()}</Link>
      <Navbar />
    </div>
  </nav>
