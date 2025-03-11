import urllib.request
import os

# Create images directory if it doesn't exist
os.makedirs('assets/images', exist_ok=True)

# Dictionary of image URLs from Pexels (these are example URLs that match our requirements)
images = {
    'hero-trading.jpg': 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg',  # Trading setup
    'trend1.jpg': 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg',  # Stock market chart
    'trend2.jpg': 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',   # Cryptocurrency
    'trend3.jpg': 'https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg', # Forex trading
    'testimonial1.jpg': 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg', # Professional woman
    'testimonial2.jpg': 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'  # Professional man
}

# Headers to mimic a browser request
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

# Download each image
for filename, url in images.items():
    print(f"Downloading {filename}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(f'assets/images/{filename}', 'wb') as f:
                f.write(response.read())
        print(f"Successfully downloaded {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")

print("\nAll downloads completed!") 