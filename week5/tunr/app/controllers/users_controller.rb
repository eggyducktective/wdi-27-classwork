class UsersController < ApplicationController

  before_action :check_if_logged_in, only: [:profile]

  def new
    @user = User.new
  end

  def create
    user = User.create user_params

    if user.persisted?
      session[:user_id] = user.id
      redirect_to user_path(user) # redirect_to user
    else
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path
    end
  end

  def index
  end

  def show
    @user = User.find params[:id] # ie /users/17

  end

  def profile

    @user = @current_user # set the @user instance variabl used by the template
    render :show # use the same template as the show action

  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  # strong params, doorman for the form
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
