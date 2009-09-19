# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_searchdemo_session',
  :secret      => 'abf3cdb275ce8f326f03102e667e943f46654bb8ab8bef3b460ebb674778c1e37c38e17a56d5948072d9755c63834aa9a9121a95e85f8903de37a936369e6424'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
