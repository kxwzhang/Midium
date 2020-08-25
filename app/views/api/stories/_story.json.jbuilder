json.extract! story, :id, :title, :subtitle, :body, :author_id
json.author story.author.username
json.photoUrl (story.photo.attached? ? url_for(story.photo) : nil)
json.commentsByParent story.comments_by_parent