import React from 'react';
import { Jumbotron, Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function RenderCard({blog}){
    return(
        <Card>
            <CardBody className="d-flex flex-column">
                <CardTitle tag="h5">{blog.title}</CardTitle>
                <CardText>{blog.summary}</CardText>
                <NavLink to={`/blog/${blog.id}`} class="btn btn-primary">Read</NavLink>
            </CardBody>
        </Card>
    )
}

function Home({blog1, blog2, blog3}){
    return(
        <React.Fragment>
            <Jumbotron>
                <h1 className="display-3">Home</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                </p>
            </Jumbotron>
            <Container fluid={true}>
                <h4 className="mb-3">Latest blog posts</h4>
                <div className="card-deck">
                    <RenderCard blog={blog1} />
                    <RenderCard blog={blog2} />
                    <RenderCard blog={blog3} />
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Home;