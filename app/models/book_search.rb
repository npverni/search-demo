class BookSearch < ActiveRecord::Base
  TOKEN_LENGTH = 4
  before_create :generate_token

  def execute
    search = Book.search
    
    search.genre_id_equals(self.genre_id) if self.genre_id
    search.author_id_equals(self.author_id) if self.author_id
    search.title_like(self.keyword) unless self.keyword.blank?

    search.all
  end

private  
  def generate_token
    if (temp_token = random_token) and self.class.find_by_token(temp_token, :select => :token ).nil?
      self.token = temp_token
    else
      generate_token
    end
  end

  def random_token
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    temp_token = ''      
    TOKEN_LENGTH.times do
      pos = rand(characters.length)
      temp_token += characters[pos..pos]
    end
    temp_token
  end

end