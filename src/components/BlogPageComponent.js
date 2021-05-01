import React, { Component } from 'react';
import { Form } from 'react-redux-form'
import { Button } from 'reactstrap';

class CommentForm extends Component {
    submitComment(){

    }

    render(){
        return(
            // <Form model="comment" onSubmit={() => this.submitComment()}>
            //     <Button color="primary" type="submit" value="submit">Submit</Button>
            // </Form>
            <div />
        )
    }
}

function RenderComments({blogPost}){
    if(blogPost.comments.length === 0) return <p>No commnets yet</p>
    return(
        <div>
            Render Comments
        </div>
    )
}

function BlogPage({blogPost}){
    return(
        <div className="container">
            <h1>Blog Page</h1>
            <p>Id: {blogPost.id}</p>
            <p>{blogPost.content}</p>
            <h2 className="mt-5">Post Comment:</h2>
            <CommentForm blogPost={blogPost} /> {/* blogPost.id will be needed to submit form */}
            <h2 className="mt-5">Comments:</h2>
            <RenderComments blogPost={blogPost} />
        </div>
    )
}

export default BlogPage;