# require your gems
require 'bundler'
Bundler.require

# set the pathname for the root of the app
require 'pathname'
APP_ROOT = Pathname.new(File.expand_path('../../', __FILE__))

# require the controller(s)
Dir[APP_ROOT.join('app', 'controllers', '*.rb')].each { |file| require file }
# require the route(s)
Dir[APP_ROOT.join('app', '*.rb')].each { |file| require file }
Dir[APP_ROOT.join('app', 'helpers', '*.rb')].each { |file| require file }


# require the model(s)
Dir[APP_ROOT.join('app', 'models', '*.rb')].each { |file| require file }

# configure Server settings
class Server < Sinatra::Base
  enable :sessions
  set :cross_origin, true
  set :allow_origin, :any
  set :allow_methods, [:post, :get, :options]
  set :allow_credentials, true
  set :allow_headers, ["*", "Content-Type", "Accept", "AUTHORIZATION", "Cache-Control"]
  set :max_age, 1728000
  set :expose_headers, ['Cache-Control', 'Content-Language', 'Content-Type', 'Expires', 'Last-Modified', 'Pragma']
  set :method_override, true
  set :root, APP_ROOT.to_path
  set :views, File.join(Server.root, "app", "views")
  set :public_folder, File.join(Server.root, "app", "public")
end