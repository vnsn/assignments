import React from 'react';

function BlogPost(props) {

    return (
        <div className="post">
            <h1 className="blogTitle"><a href="https://blackrockdigital.github.io/startbootstrap-clean-blog/post.html">{props.blog.title}</a></h1>
            <h2 className="blogSubTitle"><a href="https://blackrockdigital.github.io/startbootstrap-clean-blog/post.html">{props.blog.subtitle}</a></h2>
            <p>Posted by <span className="author"><a href="https://blackrockdigital.github.io/startbootstrap-clean-blog/post.html">{props.blog.author}</a></span> on {props.blog.date}</p>
        </div>

    )
}

export default BlogPost;
