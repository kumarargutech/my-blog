import React from 'react';
import { Container, TextField, TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import '../assets/css/style.css';

class AddComment extends React.Component {

    constructor(props) {
        super();
        this.state = {
            field: [],
            username: '',
            comment: '',
            errors: {},
            articleTitle: ''
        }
    }

    componentDidMount() {
        let articleTitle = this.props.article;
        this.setState({ articleTitle });
    }

    handleValidation = () => {

        let states = this.state;
        let status = true;
        let errors = {};
        if (!states.username) {
            errors.username = "Name field required.";
            status = false;
        }
        if (!states.comment) {
            errors.comment = "Comments field required.";
            status = false;
        }
        this.setState({
            errors
        });
        return status;
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            if (this.state.username.trim() && this.state.comment.trim()) {
                this.props.commentAction(this.state);
                this.handleReset();
            }
        }
    }

    handleReset = () => {
        this.setState({
            username: '',
            comment: ''
        });
    }

    onChangeText = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <>
                <Container className="comments-container" maxWidth="md">
                    <h3>Comments</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="textDiv">
                            <TextField name="username" label="Name" className="textField"
                                value={this.state.username}
                                onChange={this.onChangeText} />
                            <div>
                                <span className="errorsInfo"> {this.state.errors.username} </span>
                            </div>
                        </div>
                        <div className="textDiv">
                            <TextareaAutosize name="comment" className="textAreaCmt" aria-label="Comments"
                                value={this.state.comment}
                                onChange={this.onChangeText}
                                rowsmin={6} placeholder="Comments" />
                            <div>
                                <span className="errorsInfo"> {this.state.errors.comment} </span>
                            </div>
                        </div>
                        <div>
                            <Button type="submit" className="commentBtn" variant="contained" color="secondary">
                                Submit
                            </Button>
                            <Button type="button" className="commentBtn resetBtn" color="secondary" onClick={this.handleReset} color="secondary">
                                Reset
                            </Button>
                        </div>
                    </form>
                </Container>
            </>);
    }
}

export default AddComment;
