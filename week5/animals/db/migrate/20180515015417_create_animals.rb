class CreateAnimals < ActiveRecord::Migration[5.2]
  def change # ruby code, this will create sql
    create_table :animals do |t|
      t.text :name #like sql: name TEXT
      t.text :species
      t.text :description
      t.text :image_url
      t.integer :age
      t.integer :roundness
      t.boolean :alive

      t.timestamps # gies you 'create_at' and 'updated_at' timestamp fields'

    end
  end
end
