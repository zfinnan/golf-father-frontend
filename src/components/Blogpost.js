import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import FormField from "../components/FormField";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class Blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      content: "",
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = () => {
    axios.post(`${REACT_APP_SERVER_URL}/api/blogPosts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((res) => {
      res.json().then((json) => {
        this.props.reload();
        this.props.history.push(`/show/${json.blogPost._id}`);
      });
    });
  };
  render() {
    return (
      <div class="blogPost">
        <h2>Create a Blogpost!</h2>

        <FormField
          labelLink="author"
          displayLabel="Author:"
          value={this.state.author}
          handler={this.handleInput}
        />
        <FormField
          labelLink="title"
          displayLabel="Title:"
          value={this.state.title}
          handler={this.handleInput}
        />
        <FormField
          labelLink="content"
          displayLabel="Write Something:"
          value={this.state.content}
          handler={this.handleInput}
        />
        <input type="submit" onClick={this.submitForm} value="Create!" />
      </div>
    );
  }
}
export default withRouter(Blogpost);
