class ChannelsController < ApplicationController

    before_action :get_server, only: [:index, :destroy]

    def index
        render json: @server.channels, status: :ok
    end

    def create
        channel = Channel.create(channel_params)
        render json: channel, status: :created
    end

    def destroy
        channels = @server.channels
        channels.forEach do |channel|
            channel.delete
        end
        head :no_content
    end

    private
    def channel_params
        params.permit(:name, :server_id)
    end

    def get_server
        @server = Server.find(params[:server_id])
    end

end
