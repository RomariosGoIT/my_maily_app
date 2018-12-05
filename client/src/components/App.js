import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => (
  <div style={{ height: '300px', textAlign: 'center' }}>
    <h2>Dashboard</h2>
  </div>
);
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/surveys" component={Dashboard} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(App);
