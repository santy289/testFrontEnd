import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_POPULAR, ROUTE_TOP_RATED, ROUTE_UPCOMING } from '../../utils/routes/router'

function Header() {
  return (
    <div>
        <nav>
            <NavLink to={ROUTE_POPULAR}>Popular Movies</NavLink>
            <NavLink to={ROUTE_TOP_RATED}>Top Rated</NavLink>
            <NavLink to={ROUTE_UPCOMING}>Upcoming Movies</NavLink>
        </nav>
    </div>
  );
}

export default Header;
