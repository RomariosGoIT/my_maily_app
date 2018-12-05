import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter } from 'react-router-dom';
import Spinner from './UI/Spinner';
import Payments from './Payments';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return <Spinner />;
      case false:
        return <a href="/auth/google">log in</a>;
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ padding: '0 15px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">log out</a>
          </li>,
        ];
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <BrowserRouter>
                <Link
                  to={this.props.auth ? '/surveys' : '/'}
                  className="left brand-logo"
                  href="/#">
                  Emaily
                </Link>
              </BrowserRouter>
              <ul className="right" style={{ textTransform: 'uppercase' }}>
                {this.renderContent()}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStatetoProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStatetoProps)(Header);
