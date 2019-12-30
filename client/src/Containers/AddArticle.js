import { connect } from 'react-redux';
import { addArticleAction } from '../Actions/addArticleAction';
import AddArticle from '../Components/AddArticle';

const mapDispatchToProps = (dispatch, props) => ({
    addArticleAction: (data) => {
        dispatch(addArticleAction(data))
    }
});

export default connect(null, mapDispatchToProps)(AddArticle);
