class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.belongs_to :article, index: true
      t.belongs_to :menu, index: true
      t.string :name
      t.integer :level
      t.integer :menu_id
      t.integer :article_id
      t.timestamps null: false
    end
  end
end
