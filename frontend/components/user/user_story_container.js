import { connect } from 'react-redux';
import UserStory from './user_story';
import { fetchUser } from '../../actions/user_action';
import { fetchStory, deleteStory } from '../../actions/story_action';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchStory: storyId => dispatch(fetchStory(storyId)),
    deleteStory: storyId => dispatch(deleteStory(storyId))

});

export default connect(mSTP, mDTP)(UserStory);