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
        
        # Replace the incorrectly formatted self-closing tags
        content = content.replace('/ />', '/>')
        content = content.replace('//>', '/>')
        
        with open(page, 'w') as f:
            f.write(content)
        
        print(f"Fixed tags in {page}")
