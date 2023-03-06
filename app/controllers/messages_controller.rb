class MessagesController < ApplicationController

    def index
        msgs = Message.all
        render json: msgs, status: :ok
    end
    
    def create
        msg = Message.create(message_params)
        render json: msg, status: :created
    end

    private
    def message_params
        params.permit(:content, :user_id, :channel_id)
    end

end
