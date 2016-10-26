class ColorsController < ApplicationController
  skip_before_filter  :verify_authenticity_token, only: [:create, :update]

  def index
    @color = Color.last
  end

  def create
    Color.last.update(rgb: params[:rgb])
  end

  def update
    Color.last.update(rgb: params[:rgb])
  end
end
