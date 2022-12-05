import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ROUTE_POPULAR,
  ROUTE_TOP_RATED,
  ROUTE_UPCOMING,
} from './router';
import Popular from '../../views/Popular';
import TopRated from '../../views/TopRated';
import Upcoming from '../../views/Upcoming';
//  <Route path="*" element={<Page404 />} />

function Mainrouter() {
  return (
    <BrowserRouter>
      <Routes>       
        <Route path={ROUTE_POPULAR} element={<Popular />} />
        <Route path={ROUTE_TOP_RATED} element={<TopRated />} />
        <Route path={ROUTE_UPCOMING} element={<Upcoming />} />
        <Route
          path="/privacy-policy"
          component={() => {
            window.location.replace('https://google.com');
            return null;
          }}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;