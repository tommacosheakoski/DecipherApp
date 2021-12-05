import React, { Component, Fragment } from 'react';
import Product from './Product';
import axios from "axios";
import './ProductAdmin.css';
//import axios from 'axios';
const config = require('../config.json');

export default class ProductAdmin extends Component  {

    state = {
        selectedFile: null,
        fileUploadedSuccesfully: false
    }

    onFileUpload = () => {
        const FormData = new require('form-data');
        var fs = require('fs');
        const form = new FormData();
        form.append(
            "demo file",
            this.state.selectedFile,
           // this.state.selectedFile.className
        )
        axios.post("https://51ncsv1jig.execute-api.us-east-1.amazonaws.com/prod/file-upload", form).then(() => {
            this.setState({ selectedFile: null });
            this.setState({ fileUploadedSuccesfully: true });
        })
    }

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2> File Details:</h2>
                    <p> File Name: {this.state.selectedFile.name}</p>
                    <p>Last Modified: {" "}
                        {this.state.selectedFile}lastModified.toDateString()}
                    </p>
                </div>
            )

        } else if (this.state.fileUploadedSuccesfully) {
            return (
                <div>
                    <br />
                    <h4> Your file has been succesffuly uploaded</h4>
                </div>
            )
        } else {
            return (
                <div>
                    <br />
                    <h4> Choose a file and then press the Upload button </h4>
                </div>
            )
        }
    }

  render() {
    return (
      <Fragment>
        <section className="section">
                <div className="container">
                    <h2> Use this page to upload the image you'd like to decipher </h2>
                    <div>
                        <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>
                            Upload
                        </button>
                    </div>
                    {this.fileData()}
                </div>
                       
        </section>
      </Fragment>
    )
  }
}
