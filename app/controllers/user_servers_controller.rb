class UserServersController < ApplicationController

    def index
        user_servers = UserServer.all
        render json: user_servers, status: :ok
    end
    
    def create
        user_server = UserServer.create!(user_server_params)
        render json: user_server, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        user_server = UserServer.find(params[:id])
        if user_server
            user_server.delete
        else
            render json: { error: "Server not found"}, status: :not_found
        end
        head :no_content
    end

    private
    def user_server_params
        params.permit(:server_id, :user_id)
    end

end
