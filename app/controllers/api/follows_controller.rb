class Api::FollowsController < ApplicationController
    # before_action :require_logged_in! only: [:create, :destroy]

    def create
        @follow = current_user.out_follows.create!(followee_id: params[:user_id])
        @follower = @follower.follower
        render :show
    end

    def destroy
        @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
        @follow.destroy!
    end
end