# Preview all emails at http://localhost:3000/rails/mailers/site_mailer
class SiteMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/site_mailer/contact
  def contact
    SiteMailer.contact
  end

end
