class Player
  include DataMapper::Resource

  property :id,         Serial
  property :user_name, String
  property :email, String
  property :password, Text
  property :CPM, Integer
  property :WPM, Integer
  property :salt, Text
  property :times_played, Integer
  property :created_at, DateTime

end

DataMapper.finalize.auto_upgrade!