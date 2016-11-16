class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :description
      t.string :city
      t.string :state
      t.string :zipcode
    end
  end
end
