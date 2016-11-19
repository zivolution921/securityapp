class AddCategoryToProperties < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :category, :string
  end
end
