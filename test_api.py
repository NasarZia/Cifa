import requests

# Flask API endpoint
url = "http://127.0.0.1:5000/predict"

# Image file path
image_path = "./Dataset_for_Brain_tumor/Testing/no_tumor/Te-no_0042.jpg"

# Open and send the image file
with open(image_path, 'rb') as img:
    files = {'file': img}
    response = requests.post(url, files=files)

# Print the response
print(response.json())
