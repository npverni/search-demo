class BookSearchesController < ApplicationController

  def create
    @search = BookSearch.new params[:book_search]
    @success = @search.save
    @results = @search.execute       
  end  
    
  def show
    @search = BookSearch.find_by_token(params[:id])
    @results = @search.execute
  end

  def update
    @search = BookSearch.find_by_token(params[:id])
    @success = @search.update_attributes(params[:book_search]) 
    @results = @search.execute   
  end
end