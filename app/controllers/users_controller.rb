class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def show
        user = find_user
        if user
            render json: user, status: :ok
        else
            render json: { error: "User not logged in" }, status: :unauthorized
        end
    end

    def update
        user = User.find(params[:id])
        user.update!(update_user_params)
        render json: user, status: :accepted
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private
    def user_params
        params.permit(:email, :username, :password, :password_confirmation)
    end

    def update_user_params
        params.permit(:username, :email)
    end

    def find_user
        User.find(session[:user_id])
    end

end
