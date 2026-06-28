import os
import re

pages = [
    'src/app/page.tsx',
    'src/app/yoga/page.tsx',
    'src/app/fitness/page.tsx',
    'src/app/gallery/page.tsx',
    'src/app/contact/page.tsx'
]

for page in pages:
    if os.path.exists(page):
        with open(page, 'r') as f:
            content = f.read()
        
        # Replace ' for="' with ' htmlFor="'
        content = content.replace(' for="', ' htmlFor="')
        
        with open(page, 'w') as f:
            f.write(content)
        
        print(f"Fixed htmlFor in {page}")
