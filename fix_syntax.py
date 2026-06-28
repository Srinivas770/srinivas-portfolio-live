import os

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
        
        # 1. Fix nested single quotes in backgroundImage
        # Replace 'url('...')' with "url('...')"
        import re
        content = re.sub(r"'backgroundImage': 'url\('(.*?)'\)'", r'backgroundImage: "url(\'\1\')"', content)
        
        # 2. Fix double closing path tag
        content = content.replace('</path></path>', '</path>')
        
        # 3. Fix unquoted fontVariationSettings value
        content = content.replace("'fontVariationSettings': 'FILL' 1", "fontVariationSettings: \"'FILL' 1\"")
        
        # Also let's fix any background-image if it wasn't caught
        content = re.sub(r"'backgroundImage':\s*'([^']*)'", r'backgroundImage: "\1"', content)
        
        with open(page, 'w') as f:
            f.write(content)
        
        print(f"Fixed syntax in {page}")
