class CreateProperties < ActiveRecord::Migration[5.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :email
      t.integer :phone
      t.text :job_title
      t.text :job_description
      t.string :location
    end
  end
end
