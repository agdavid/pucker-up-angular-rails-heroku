require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder

  # Use to prevent CSRF attacks by raising an exception
  protect_from_forgery with: :exception

  # Use when adding custom attributes to Devise user strong params
  before_filter :configure_permitted_parameters, if: :devise_controller?

  after_filter :set_csrf_cookie

  respond_to :json

  # Use for authorization
  include Pundit

  def set_csrf_cookie
      cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def index
      # root application#index will be the home to ui-view
  end

  protected
      def verified_request?
          super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
      end

      # Use when adding custom attributes to Devise user strong params
      def configure_permitted_parameters
          devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :password, :password_confirmation, :remember_me, :username) }
          devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :password, :password_confirmation, :current_password, :username, :admin) }
      end
end
