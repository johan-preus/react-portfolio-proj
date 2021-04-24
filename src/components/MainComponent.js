import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import BlogDirectory from './BlogDirectoryComponent';
import BlogPage from './BlogPageComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


// check what this function does later!
const mapStateToProps = state => {
    return {
        blogPosts: state.blogPosts
    }
}



class Main extends Component {
    render(){

        const HomePage = () => {
            return(
                <Home
                    blog1={this.props.blogPosts[this.props.blogPosts.length - 1]}
                    blog2={this.props.blogPosts[this.props.blogPosts.length - 2]}
                    blog3={this.props.blogPosts[this.props.blogPosts.length - 3]}
                />
            )
        }

        const BlogWithId = ({ match }) => {
            return(
                <BlogPage
                    blogPost={
                        this.props.blogPosts.filter(
                            (b) => b.id === +match.params.blogId
                        )[0]
                    }
                />
            )
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/blog" component={BlogDirectory} />
                    <Route path="/blog/:blogId" component={BlogWithId} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));