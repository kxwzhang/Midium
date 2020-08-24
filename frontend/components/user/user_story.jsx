import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserStoryItem from './user_story_item';

class UserStory extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchAllStories, fetchUser } = this.props;
        fetchUser(this.props.match.params.userId);
        fetchAllStories();
        window.scrollTo(0,0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchAllStories();
        }
    }

    render() {
        const { stories, user, currentUser, deleteStory } = this.props;
        if (!currentUser) {
            return null;
        } else {
            const myStories = [];
            stories.forEach(story => {
                if (story.author_id === user.id) {
                    myStories.push(story);
                }
            })
            return (
                <div className='user-story-container'>
                    <div className='your-stories-container'>
                        <div className='your-stories'>Your Stories</div>
                        <Link to={'/stories/new'}>
                            <button className='write-a-story-btn'>Write a story</button>
                        </Link>
                    </div>
                    <div className='user-story-divider'></div>
                    <div className='user-story-stories-container'>
                        {myStories.map(story => <UserStoryItem 
                                                    key={story.id} 
                                                    user={user} 
                                                    currentUser={currentUser} 
                                                    story={story} 
                                                    deleteStory={deleteStory} />)}
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(UserStory);