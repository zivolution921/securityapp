class SiteMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.site_mailer.contact.subject
  #
  def contact(contact)
    @contact = contact

    mail to: "ziv921@gmail.com"
  end
end
