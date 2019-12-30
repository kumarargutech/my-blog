import { connect } from 'react-redux';
import { commentAction } from '../Actions/commentAction';
import AddComment from '../Components/AddComment';

const mapStateToProps = (state, props) => {
    return({ 
        comments: state.comments    
    }); 
}

const mapDispatchToProps = (dispatch, props) => ({    
    commentAction: (data) => {
        dispatch(commentAction(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
