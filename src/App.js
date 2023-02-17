/** @format */

import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import unsplash from './api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [], year: new Date().getFullYear() };

  onSearchSubmit = async (input) => {
    const data = await unsplash.get('/search/photos', {
      params: {
        query: input,
        per_page: 50,
      },
    });
    this.setState({ images: data.data.results });
    const html = `<p class="lead text-secondary">To see More photos please
          <a class='text-decoration-none' href="https://unsplash.com/s/photos/${input}">click here</a></p>`;
    document.querySelector('.insert_more').innerHTML = '';
    setTimeout(() => {
      document
        .querySelector('.insert_more')
        .insertAdjacentHTML('beforeend', html);
    }, 1000);
  };

  render() {
    return (
      <div className="main pt-4">
        <div className="container border py-4">
          <div className="text-center">
            <img
              src="./img/logo.png" alt="Logo"
              className="img-fluid float-left"
              width={50}
            />
            <h2>Welcome To My Page</h2>
            <p className="lead mt-4 font-weight-bold">
              Search the Unsplash API for the images you're looking for.
            </p>
          </div>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
          <div className="insert_more text-center "></div>
        </div>

        <small className="footer m-0 text-center text-light">
          &copy;{this.state.year}by{' '}
          <a
            className="text-info text-decoration-none"
            href="https://alirezamak.com"
          >
            Alireza Mak
          </a>{' '}
          | Front End Developer. Powered by{' '}
          <a
            className="text-info text-decoration-none"
            href="https://unsplash.com"
          >
            Unsplash.com
          </a>
          .
        </small>
      </div>
    );
  }
}

export default App;
