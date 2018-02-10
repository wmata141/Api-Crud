import React, { Component } from 'react';

import Form from './Form';
import { createBlogPost } from './ActionCliente';

export default class Create extends Component {

    handleSubmit(data) {
      console.log("handleSubmit",data);
      createBlogPost(data);
      window.location.href='/cliente';
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}></Form>
            </div>
        );
    }
}
