import React from 'react';
import ChildCommentShow from './child_comment_show';

class CommentShow extends React.Component {
    componentDidMount() {
        const {story, fetchComment } = this.props;
        Object.values(story.comments).forEach(comment => {
            fetchComment(comment.id);
        });
        // fetch story again
    }

    render() {
        const { story, comments } = this.props;
        console.log(comments);
        return (
            <div className='comment-container'>
                <div></div>
                <ChildCommentShow />
            </div>
        );
    }
}

export default CommentShow;