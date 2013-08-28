# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Server::Application.config.secret_key_base = '189d6476eb6c136bb9ee86d58494d89363b23636fd79563e066450ea73f5a295168380ad86f53c5f06cd61fc78c6dc9b8eddfbd94f2699df57484d3f9a883ae8'
