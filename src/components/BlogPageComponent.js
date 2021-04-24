import React from 'react';

function BlogPage({blogPost}){
    return(
        <div className="container">
            <h1>Blog Page</h1>
            <p>Id: {blogPost.id}</p>
        </div>
    )
}

export default BlogPage;