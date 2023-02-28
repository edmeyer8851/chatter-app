class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user
        else
            render json: { errors: ["Invalid username or password, please try again."]}, status: :unauthorized
        end
    end

    def destroy
        user = User.find(session[:user_id])
        if user
            session.delete :user_id
            head :no_content
        else
            render json: { error: "There's no one logged in to log out!" }, status: :unauthorized
        end
    end

end
