import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button
} from "shards-react";
import axios from 'axios';
import Loader from 'react-loader-spinner';

class NewDraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      text: '',
      loading: false
    };
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
    this.setState({loading: true});
    console.log("loading")
    axios.post('http://localhost:5000/scanner', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((resp)=> {
      this.setState({text: resp.data.msg});
      console.log(resp.data.msg);
      console.log(typeof(img))
      this.setState({loading: false});
      
    })
    .catch((err)=>console.log(err.msg))
    console.log("response")
  }

  render() {
    let {loading} = this.state;
    return (
      <Card>
        <div style={{margin: "2em", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" ref={this.fileInput}/>
              <label class="custom-file-label" for="inputGroupFile01">Choose File</label>
            </div>
          </div>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </div>

        {loading && <Loader
          style={{
            justifyContent: "center",
            display: "flex"
          }}
          type="ThreeDots"
          color="#00BFFF"
          height={50}
          width={50}
          // timeout={3000}
        />}

        <CardBody className="d-flex flex-row">
          <Form className="quick-post-form" onSubmit={this.handleSubmit}>
            {/* Title */}
            <FormGroup>
              <FormInput placeholder="Keyword to search" value={this.state.value} onChange={this.handleChange}/>
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
