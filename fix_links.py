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
        
        # We need to replace the hrefs specifically for the nav links
        content = content.replace('href="/">Home</a>', 'href="/">Home</a>')
        content = content.replace('href="/">Yoga</a>', 'href="/yoga">Yoga</a>')
        content = content.replace('href="/">Fitness</a>', 'href="/fitness">Fitness</a>')
        content = content.replace('href="/">Gallery</a>', 'href="/gallery">Gallery</a>')
        content = content.replace('href="/">Contact</a>', 'href="/contact">Contact</a>')
        
        # If the original file (like src/app/page.tsx) had href="#" instead of href="/"
        content = content.replace('href="#">Home</a>', 'href="/">Home</a>')
        content = content.replace('href="#">Yoga</a>', 'href="/yoga">Yoga</a>')
        content = content.replace('href="#">Fitness</a>', 'href="/fitness">Fitness</a>')
        content = content.replace('href="#">Gallery</a>', 'href="/gallery">Gallery</a>')
        content = content.replace('href="#">Contact</a>', 'href="/contact">Contact</a>')
        
        with open(page, 'w') as f:
            f.write(content)
        
        print(f"Fixed links in {page}")
