require 'sinatra'
require_relative 'models/user'

get '/' do
  user = User.new("Brice Nkengsa")
  erb :index, :locals => {:user => user}
end
