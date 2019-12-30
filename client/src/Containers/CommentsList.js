import { connect } from 'react-redux';
import CommentsList from '../Components/CommentsList';

const mapStateToProps = (state, props) => {

    return({ 
        comments: state.comments 
    }); 
}

export default connect(mapStateToProps, null)(CommentsList);
