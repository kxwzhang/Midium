import * as StoryApiUtil from '../util/story_api_util';
import { receiveErrors } from './error_action';

export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';

const receiveAllStories = stories => ({
    type: RECEIVE_ALL_STORIES,
    stories
});

const receiveStory = story => ({
    type: RECEIVE_STORY,
    story
});

const removeStory = storyId => ({
    type: REMOVE_STORY,
    storyId
});

export const fetchAllStories = () => dispatch => (
    StoryApiUtil.fetchAllStories()
        .then(stories => dispatch(receiveAllStories(stories)))
);

export const fetchStory = storyId => dispatch => (
    StoryApiUtil.fetchStory(storyId)
        .then(story => dispatch(receiveStory(story)))
);

export const createStory = story => dispatch => (

);