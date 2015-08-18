class Server < Sinatra::Base
helpers do
  def bar
    "testing if this would work"
  end
  def loadusers
  	players = Player.all(:order => :total_score.desc)
  	return players
  end
  def login
    if session[:username].nil?
      return false
    else
      return true
    end
  end
end
end