import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button
} from "shards-react";
import axios from 'axios';
class NewDraft extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', text: ''};
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData();
    var img = this.fileInput.current.files[0];
    console.log(img);
    formData.append("file", img);
    axios.post('http://localhost:5000/scanner', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((resp)=> {
      this.setState({text: resp.data.msg});
      console.log(resp.data.msg);
      console.log(typeof(img))
      
    })
    .catch((err)=>console.log(err.msg))
  }

  render() {
    return (
      <Card small className="h-100">

        <input type="file" ref={this.fileInput}/>

        <CardBody className="d-flex flex-column">
          <Form className="quick-post-form" onSubmit={this.handleSubmit}>
            {/* Title */}
            <FormGroup>
              <FormInput placeholder="Keyword to search" value={this.state.value} onChange={this.handleChange}/>
            </FormGroup>

            {/* Create Draft */}
            <FormGroup className="mb-0">
              <Button theme="accent" type="submit">
                Highlight keywords
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={this.state.value.split(" ")}
          autoEscape={true}
          textToHighlight={this.state.text}
        />
      </Card>

      
    );
  }
}
export default NewDraft;
