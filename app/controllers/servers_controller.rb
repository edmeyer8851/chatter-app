class ServersController < ApplicationController

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

    def get_servers_by_user
        user_servers = UserServer.where(user_id: session[:user_id])
        servers = []
        user_servers.each do |user_server|
            servers << user_server.server
        end
        render json: servers, status: :ok
        
    end

    private
    def server_params
        params.permit(:name)
    end
end
