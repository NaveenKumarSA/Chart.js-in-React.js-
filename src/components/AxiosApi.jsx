import React, { Component } from "react";
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import { Spinner, Alert } from "react-bootstrap";

class AxiosApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      posts: [],
      postsStatus: false,
      error: false,
    };
  }
  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
          postsStatus: true,
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <div>
        <>This is a header compnent hehehe</>
        {this.state.posts.length !== 100 ? (
          <>
            <Spinner variant="grow" />
          </>
        ) : (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <td>
                  <h3>Sl-No</h3>
                </td>
                <td></td>
                <td>
                  <h3>Description</h3>
                </td>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <p>{post.id}</p>
                  </td>
                  <td></td>
                  <td>
                    <p>{post.title}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default AxiosApi;
