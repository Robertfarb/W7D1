class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: {in: [true, false] }


end


# Todo.new(title: "hello", body: "world", done: false)
