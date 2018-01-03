import React, { Component } from 'react';
import Form from './Form';
import { createBlogPost } from './Action';

export default class Create extends Component {

    handleSubmit(data) {
        createBlogPost(data)
        // this.props.router.push('/').bind(this);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}></Form>
            </div>
        );
    }
}
