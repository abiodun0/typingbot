require 'sinatra/base'
#require 'sinatra/active_record'
require 'sinatra/flash'
require 'data_mapper'
require 'bcrypt'
require 'rack-flash'
require 'json'

#DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/typing_speed.db")
DataMapper.setup(:default, 'postgres://gxgijptioiskir:WBTHWR4S7yUdH8OXC-zkiY6B6W@ec2-54-197-255-248.compute-1.amazonaws.com:5432/d91dbf6qmcnjp6')

class Server < Sinatra::Base
  use Rack::Flash
     get '/' do
     #@user = User.new("Abiodun shuaib")
  
    #erb :index
    #"Test Data #{@user.name}"
    redirect '/login'

  end

  get '/login' do

    haml :login
  end
  post '/login' do
    if !session[:user_name].nil? then redirect '/dashboard' end
    user = Player.first(:email => params[:email])
  if !user.nil?
    if user[:password] == BCrypt::Engine.hash_secret(params[:password], user[:salt])
      session[:user_name] = user[:user_name]
      #return "Welcome #{session[:user_name]}"
      redirect '/dashboard'
    end
  end
    flash[:error] = "Wrong User Name and password combination"
    redirect '/login'
  end
  get '/signup' do
    if !session[:user_name].nil? then redirect '/dashboard' end
    #Player.all.destroy
    haml :signup
  end
  post '/signup' do

              user_name = Player.first(:email => params[:email])
              user_email = Player.first(:user_name => params[:user_name])
              if !user_name.nil? || !user_email.nil?  
                flash[:notice] = "User Email or Name already exists" 
                redirect '/signup'
              end
              if(params[:password] != params[:confirm_password])
                flash[:notice] = "Your Password do not match" 
                redirect '/signup'
               end
              password_salt = BCrypt::Engine.generate_salt
              password_hash = BCrypt::Engine.hash_secret(params[:password], password_salt)

               Player.create(:user_name => params[:user_name],:password => password_hash, :email => params[:email],:salt => password_salt,:CPM => 0,:WPM =>0,:times_played => 0)
              session[:user_name] = params[:user_name]
               #p @player
               redirect '/dashboard'
  end
  post '/update',:provides => :json do
      @update_player =  Player.first(:user_name => session[:user_name])
      @update_player.CPM = params[:cpm]
      @update_player.WPM = params[:wpm]
      @update_player.times_played += 1
      @update_player.save
      p params[:cpm]
      return "success".to_json
  end

  get '/post' do
     Post.create(:title => 'test-content', :body => 'My body is here')
     redirect '/posts'
  end

  get '/posts' do
    @items = Post.all(:order => :created_at.desc)
    haml :post
  end

  get '/dashboard' do
    @current_user = Player.first(:user_name => session[:user_name])
    if @current_user.nil? 
      flash[:error] = "You Have to be logged in to view that page"
     redirect '/login'
   end
    #if !login  then redirect '/login' end
    haml :dashboard
  end
get "/logout" do
  session[:user_name] = nil
  redirect "/login"
end

  # start the server if ruby file executed directly
  run! if app_file == $0
end