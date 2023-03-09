class ServersController < ApplicationController

    before_action :get_user, only: [:index]

    def index
        render json: @user.servers, status: :ok
    end
    
    def show
        server = Server.find(params[:id])
        if server
            render json: server
        else
            render json: { error: "Server not found"}, status: :not_found
        end
    end
    
    def create
        server = Server.create!(server_params)
        render json: server, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        server = Server.find(params[:id])
        if server
            server.destroy
            head :no_content
        else
            render json: { error: "Server not found"}, status: :not_found
        end
    end

    private
    def server_params
        params.permit(:name)
    end

    def get_user
        @user = User.find(params[:user_id])
    end

end
