import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_action';
import { fetchAllStories, fetchStory, createStory } from '../../actions/story_action';

const mSTP = ({ session, entities: { users, stories } }, ownProps) => ({
  user: users[ownProps.match.params.userId],
  currentUser: users[session.id],
  stories: Object.values(stories)
});

const mDTP = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchStories: () => dispatch(fetchAllStories()),
  fetchStory: story => dispatch(fetchStory(story)),
  createStory: story => dispatch(createStory(story))
});

export default connect(mSTP, mDTP)(UserShow);