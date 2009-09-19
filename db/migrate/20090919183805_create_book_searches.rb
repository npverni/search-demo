class CreateBookSearches < ActiveRecord::Migration
  def self.up
    create_table :book_searches do |t|
      t.integer :genre_id
      t.integer :author_id
      t.string :keyword
      t.string :token

      t.timestamps
    end
  end

  def self.down
    drop_table :book_searches
  end
end
