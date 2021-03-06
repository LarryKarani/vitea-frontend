import React,  { Component } from 'react';

export default class MultipleImageUploadComponent extends Component {
    fileObj = [];
    fileArray = [];

    state = { 
        file: [null]
    }

    uploadMultipleFiles = (e) => {
        this.fileObj.push(e.target.files)
        for(let i =0; i< this.filterObj[0].length; i++){
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({file: this.fileArray})
    }

    uploadFiles = (e) => {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        return (
            <form>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt=".."/>
                    ))}
                </div>
                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple/>
                </div>
                <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
            </form>
        )
    }
}