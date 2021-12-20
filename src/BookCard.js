import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import UpdateBookModal from './UpdateBookModal.js'
import Card from 'react-bootstrap/Card';

export default class BookCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showUpdateModal: false
    };
  }
  handleUpdateClick = () => {
    this.setState({ showUpdateModal: true });

    console.log("The handleUpdateClick gives us this.state.oneBook as: " + this.state.oneBook);
  };

  showUpdateModal = () => {
    this.setState({ showUpdateModal: true });
  };

  closeUpdateModal = () => {
    this.setState({ showUpdateModal: false });
  };

  render() {
    return (
      <div>
        <Card>

        <li key={this.props.oneBook._id}>
          <h3>{this.props.oneBook.title}</h3>
          <br></br>
          <p>{this.props.oneBook.description}</p>
          <p>{this.props.oneBook.status}</p>
          <p>{this.props.oneBook.email}</p>
          <span>
            {" "}
            <Button
              onClick={() =>
                this.deleteBook(this.props.oneBook._id, this.props.oneBook.email)
              }
            >
              Delete
            </Button>
          </span>



          <Button onClick={this.handleUpdateClick}>
            Update This Book
          </Button>
        </li>

        <UpdateBookModal
          thisBook={this.props.oneBook}
          showUpdateModal={this.state.showUpdateModal}
          closeUpdateModal={this.closeUpdateModal}
          updateBook={this.props.updateBook}
        />

        </Card>
      </div>
    )
  }
}
