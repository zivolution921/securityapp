class PagesController < ApplicationController
  def home
  end

  def about
  end

  def contact
    SiteMailer.contact(params[:contact]).deliver_now

    render json: {
      status: 'ok'
    }
  end
end
