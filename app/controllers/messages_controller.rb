class MessagesController < ApplicationController

    def create
        msg = Message.create(message_params)
        render json: msg, status: :created
    end

    private
    def message_params
        params.permit(:content, :user_id, :channel_id)
    end

end
