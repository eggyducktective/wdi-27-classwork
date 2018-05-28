class SessionController < ApplicationController
  def new
  end

  def create
    # raise "egg"
    user = User.find_by email: params[:email]

    if user.present? && user.authenticate(params[:password])
      # correct credentials!
      # create a cookie which stores the Rails session,
      session[:user_id] = user.id # session object, rails wil do the rest
      redirect_to user_path(user)
    else
      # bad credentials, ie. unsuccessful login
      flash[:error] = "Invalid email address or password"
      redirect_to login_path

    end

  end

  def destroy
    session[:user_id] = nil # This clears the cookie
    redirect_to login_path
  end

end
