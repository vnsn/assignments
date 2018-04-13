import React from 'react';
import BlogPost from "./BlogPost";
import blogData from "./data.json";


function BlogList() {

    const blogList = blogData.map(blogObj => 
        <BlogPost 
            key={blogObj.title + blogObj.date} 
            blog={blogObj}
        />)

    return (
        <div className="bloglist">
            {blogList}
        </div>
    );

}

export default BlogList;
