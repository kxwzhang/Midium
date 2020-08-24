# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  comment           :text             not null
#  parent_comment_id :integer
#  story_id          :integer          not null
#  commenter_id      :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
end
