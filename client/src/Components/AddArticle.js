import React from 'react';
import { Container, TextField, TextareaAutosize } from '@material-ui/core';
import { connect } from 'react-redux';
import { addArticleAction } from '../Actions/addArticleAction';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/style.css';

class AddArticle extends React.Component {

    constructor(props) {
        super();
        this.state = {
            field: [],
            article_title: '',
            article_content: '',
            errors: {},
            toastrStatus: false
        }
    }

    handleValidation = () => {
        let states = this.state;
        let status = true;
        let errors = {};
        if (!states.article_title) {
            errors.article_title = "Article title field required.";
            status = false;
        }
        if (!states.article_content) {
            errors.article_content = "Article content field required.";
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
            console.log(this.state);
            if (this.state.article_title.trim() && this.state.article_content.trim()) {
                this.props.addArticleAction(this.state);
                this.handleReset();
            }
        }
        this.setState({ toastrStatus:false });
    }

    handleReset = () => {
        this.setState({
            article_title: '',
            article_content: ''
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.addArticleStatus !== this.props.addArticleStatus) {
            this.setState({ toastrStatus: true });
        }        
    }

    onChangeText = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({toastrStatus: false});
    }

    render() {

        let { toastrStatus } = this.state;

        return (
            <>
                {toastrStatus && toast.success(this.props.addArticleStatus.message)}
                <ToastContainer />
                <Container className="comments-container" maxWidth="md">
                    <h3>Add Article</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="articleTextDiv">
                            <TextField name="article_title" label="Article Name*" className="addArticleTextField"
                                value={this.state.article_title}
                                onChange={this.onChangeText} />
                            <div className="divClassName">
                                <span className="errorsInfo"> {this.state.errors.article_title} </span>
                            </div>
                        </div>
                        <div className="textDiv">
                            <TextareaAutosize name="article_content" className="articleTextAreaCmt" aria-label="Article Content"
                                value={this.state.article_content}
                                onChange={this.onChangeText}
                                rowsmin={6} placeholder="Article Content*" />
                            <div className="divClassName">
                                <span className="errorsInfo"> {this.state.errors.article_content} </span>
                            </div>
                        </div>
                        <div className="articleBtn">
                            <Button type="submit" className="addArticleBtn" variant="contained" color="secondary">
                                Submit
                            </Button>
                            <Button type="button" className="addArticleBtn resetBtn" color="secondary" onClick={this.handleReset} color="secondary">
                                Reset
                            </Button>
                        </div>
                    </form>
                </Container>
            </>);
    }
}

const mapStateToProps = (state, props) => {

    console.log("addarticle states: ", state);

    return ({
        addArticleStatus: state.addArticle
    });
}

const mapDispatchToProps = (dispatch, props) => ({
    addArticleAction: (data) => {
        dispatch(addArticleAction(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);
