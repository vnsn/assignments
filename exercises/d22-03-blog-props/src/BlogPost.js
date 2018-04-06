import React from 'react';

function BlogPost(props) {

    const post = true;

    return (

        <div className="post">
            {/* <img className="heroImg" src={props.hero.imgUrl} alt={props.hero.name}/> */}

            <h1 className="blogTitle">{props.blog.title}</h1>
            <h2 className="blogSubTitle">{props.blog.subtitle}</h2>
            <p>Posted by <span className="author">{props.blog.author}</span> on {props.blog.date}</p>
        </div>

    )
}

export default BlogPost;
