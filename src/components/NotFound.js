import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import notFoundImg from '../images/404.jpg';

class NotFound extends Component {
  state = {
    shouldGoHome: false
  }

  render() {
    const { shouldGoHome } = this.state;

    if(shouldGoHome) {
      return <Redirect to='/' />
    }

    return (
      <section className="container not-found-container">
        <img src={notFoundImg} alt='Page not found' />
        <button className="btn" onClick={this.handleGoHome}>Go Home</button>
      </section>
    )
  }

  handleGoHome = () => {
    this.setState({
      shouldGoHome: true
    })
  }
}

export default NotFound;