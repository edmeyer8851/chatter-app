class UserServersController < ApplicationController

    def index
        user_servers = UserServer.all
        render json: user_servers, status: :ok
    end
    
    def create
        user_server = UserServer.create(user_server_params)
        render json: user_server, status: :created
    end

    def destroy
        user_server = UserServer.find(params[:id])
        user_server.delete
        head :no_content
    end

    private
    def user_server_params
        params.permit(:server_id, :user_id)
    end

end
