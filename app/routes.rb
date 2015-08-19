require 'sinatra/base'
#require 'sinatra/active_record'
require 'sinatra/flash'
require 'data_mapper'
require 'bcrypt'
require 'rack-flash'


DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/typing_speed.db")
class Server < Sinatra::Base
  use Rack::Flash
     get '/' do
     @user = User.new("Abiodun shuaib")
  
    #erb :index
    #"Test Data #{@user.name}"
    haml :index

  end

  get '/login' do

    haml :login
  end
  post '/login' do
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

               Player.create(:user_name => params[:user_name],:password => password_hash, :email => params[:email],:salt => password_salt,:CPM => 0,:WPM =>0,:total_score => 0)
              session[:user_name] = params[:user_name]
               #p @player
               redirect '/dashboard'
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