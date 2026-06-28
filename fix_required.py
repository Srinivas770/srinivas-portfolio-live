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
        
        content = content.replace('required=""', 'required')
        
        with open(page, 'w') as f:
            f.write(content)
        
        print(f"Fixed required in {page}")
