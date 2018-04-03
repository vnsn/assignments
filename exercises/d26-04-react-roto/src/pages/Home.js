import React from 'react'

function Home (props) {
    return (
        <div>
            <h2>Router Exercise</h2>
            <p>For this exercise you will be making a mock SPA (Single Page Application) for a plumbing company website.</p>

            <p>Your website must contain a navbar, footer, and a main view section. Your navbar must contain at least 3 <code>Link</code> tags to at least 3 different views (for example <code>Home</code>, <code>About</code>, and <code>Services</code>).</p>

            <p>The goal is to become proficient in using the three basic React-Router components: <code>Link</code>,<code>Switch</code>, and <code>Route</code>.</p>

            <p>Make sure to <code>npm install --save react-router-dom</code> and wrap your <code>App</code> component inside <code>BrowserRouter</code>:  </p>

            <pre><code>ReactDOM.render(  
            &lt;BrowserRouter&gt;&lt;App /&gt;&lt;/BrowserRouter&gt;, 
            document.getElementById("root");
            );
            </code></pre>

            <p>For a refresher on how React Router works, <a href="https://coursework.vschool.io/react-router/">check out our post about it</a></p>
        </div>
    )
}

export default Home;
