class TodosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    @todo = Todo.find(params[:id])
    render json: Todo.find(params[:id])
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo
      @todo.destroy
      render json: @todo
    else
      render json: @todos.errors.full_messages
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body)
  end
end
