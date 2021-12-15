import React, { Component } from 'react'
import  Button  from 'react-bootstrap/Button'




export default class DeleteButton extends Component {

  // handleSubmit = (event) => {
  //   event.preventDefault();
  
   
  //   this.props.deleteBook();
  // }

  render() {
    return (
      <div>
         <Button onClick={() => this.props.deleteBook(this.props.book._id)} type ="submit">Delete</Button>

      </div>
    )
  }
}
