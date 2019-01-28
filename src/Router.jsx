import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Games from './pages/Games';
import Game from './pages/Game';
import MenuPage from './pages/MenuPage';
import menu from './data/menu.json';

const MenuRoutes = menu.slice(1, menu.length)
  .map((menuItem, index) => (
    <Route
      key={index}
      path={menuItem.path}
      render={() => (<MenuPage pageName={menuItem.pageName} />)}
    />
  ));

export default () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Games} />
        { MenuRoutes }
        <Route path="/game/:id" component={Game} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
