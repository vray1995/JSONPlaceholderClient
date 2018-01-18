import React, { Component } from 'react';
import logo from './logo.svg';
import ContainerUsersList from './containers/UsersList';
import ContainerUserPage from './containers/UserPage';
import AlbumPage from './components/AlbumPage';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  getAlbumsByUserId,
  getPhotosByAlbumId
} from './services/JSONPlaceholder';

const styles = require('./App.sass');

class App extends Component {
  componentDidMount() {
    getPhotosByAlbumId(2)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
  }

  render() {
    return (
        <Router basename="/">
          <Switch>
            <Route path='/user/:userId' component={({ match }) => {
              const userId = match.params.userId;
              return <ContainerUserPage userId={userId}/>;
            }}/>
            <Route path='/album/:albumId' component={({ match }) => {
              const albumId = match.params.albumId;
              return <AlbumPage/>;
            }}/>
            <Route path='/users' component={() => {
              return <ContainerUsersList/>;
            }}/>
            <Route path='/' component={() => {
              return <ContainerUsersList/>;
            }}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
