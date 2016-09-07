class Api::SessionsController < ApplicationController
  def create
    @account = Account.find_by_credentials(
      params[:account][:email],
      params[:account][:password]
    )

    if @account.nil?
      error! :unauthenticated, 'Invalid email/password combination'
    else
      login!(@account)
      expose @account
    end
  end

  def destroy
    @account = current_account

    if @account
      logout!
      expose @acount
    else
      error! :invalid_version, 'Nobody is signed in!'
    end
  end
end