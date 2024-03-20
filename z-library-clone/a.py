import requests

url = "https://zlib-articles.se/"

response = requests.get(url)
print(response.text)