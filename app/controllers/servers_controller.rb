class ServersController < ApplicationController

    before_action :get_user, only: [:index]

    def index
        render json: @user.servers, status: :ok
    end
    
    def show
        server = Server.find(params[:id])
        render json: server
    end
    
    def create
        server = Server.create(server_params)
        render json: server, status: :created
    end

    def destroy
        server = Server.find(params[:id])
        server.destroy
        head :no_content
    end

    private
    def server_params
        params.permit(:name)
    end

    def get_user
        @user = User.find(params[:user_id])
    end

end
