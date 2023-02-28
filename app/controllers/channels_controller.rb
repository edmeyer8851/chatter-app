class ChannelsController < ApplicationController

    def destroy
        channel = Channel.find(params[:id])
        channel.delete
        head :no_content
    end

end
