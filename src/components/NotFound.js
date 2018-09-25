import React from 'react';
import notFoundImg from '../images/404.jpg';

const NotFound = ({ history }) => {
  return (
    <section className="container not-found-container">
      <img src={notFoundImg} alt='Page not found' />
      <button className="btn" onClick={() => history.push('/')}>Go Home</button>
    </section>
  )
}

export default NotFound;