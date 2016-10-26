class CreateColors < ActiveRecord::Migration[5.0]
  def change
    create_table :colors do |t|
      t.text :rgb

      t.timestamps
    end
  end
end
