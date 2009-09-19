class BookSearchesController < ApplicationController

  def create
    @search = BookSearch.new params[:book_search]
    @success = @search.save
    @results = @search.execute       
  end  
  
  def create_d
    
    b = BookSearch.create
    render :text => "#{b.token}"
  end
  
  def show
    @search = BookSearch.find_by_token(params[:id])
    @results = @search.execute
    @genres = Genre.find(:all, :order => "name")
    @authors = Author.find(:all, :order => "name")    
  end

  def update
    @search = BookSearch.find_by_id(params[:id])
    @success = @search.update_attributes(params[:book_search]) 
    @results = @search.execute   
  end
end