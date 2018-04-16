import React from 'react';

function About(props) {
  return (
    <section className="content about">
      <h2>About</h2>
      <p>This app was developed as a practice in using React with Redux and Thunk to make asynchronous HTTP requests to an API.</p>

      <div className="miniTmdb">
      <i className="tmdb mini" />
        <p>This product uses the <a href="https://www.themoviedb.org/">TMDb API</a> but is not endorsed or certified by TMDb.  </p>
      </div>

      <p>Photo on homepage by <a href="https://unsplash.com/@baesik">Elijah Flores</a> on <a href="https://unsplash.com/">Unsplash</a>.</p>

      <p>Created by Jen Evenson. Find me at: <a href="https://www.github.com/vnsn/">Github</a> - <a href="https://www.linkedin.com/in/jvnsn/">LinkedIn</a>
      </p>
    </section>
  );
}

export default About;
