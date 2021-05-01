import React from 'react';
import { Jumbotron, Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RenderCard({blog, dNone = false}){
    if(dNone){
        return(
            <Card className="text-decoration-none d-none d-lg-flex bgColorD">
                <CardBody className="d-flex flex-column">
                    <CardTitle tag="h5">{blog.title}</CardTitle>
                    <CardText>{blog.summary}</CardText>
                    <NavLink to={`/blog/${blog.id}`} className="btn btnCustomD" id="btn3">Read</NavLink>
                </CardBody>
            </Card>
        )
    }
    return(
        <Card className="bgColorD text-decoration-none">
            <CardBody className="d-flex flex-column">
                <CardTitle tag="h5">{blog.title}</CardTitle>
                <CardText>{blog.summary}</CardText>
                <NavLink to={`/blog/${blog.id}`} className="btn btnCustomD">Read</NavLink>
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
                    <RenderCard dNone={true} blog={blog3} />
                </div>
                <Container className="d-flex" fluid={true}>
                    <div className="row d-flex ml-auto">
                        <div className="col mt-none mt-sm-3">
                            <Link className="" to="/blog">view more blog posts</Link>
                        </div>
                    </div>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Home;