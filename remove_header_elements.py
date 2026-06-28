import os
import re

pages = [
    'src/app/page.tsx',
    'src/app/yoga/page.tsx',
    'src/app/fitness/page.tsx',
    'src/app/gallery/page.tsx'
]

for page in pages:
    if os.path.exists(page):
        with open(page, 'r') as f:
            content = f.read()
        
        # We need to extract the nav block first to avoid matching Contact buttons elsewhere (e.g. in hero)
        nav_match = re.search(r'<nav[^>]*>.*?</nav>', content, re.DOTALL)
        if nav_match:
            nav_content = nav_match.group(0)
            original_nav = nav_content
            
            # Remove Contact link from nav
            # Matches: <a ...>Contact</a>
            # Accounting for different tags and whitespace
            nav_content = re.sub(r'<a[^>]*href=["\'](?:/contact|#)["\'][^>]*>\s*Contact\s*</a>', '', nav_content, flags=re.IGNORECASE | re.DOTALL)
            # Also generic match for <a>Contact</a> inside nav just in case
            nav_content = re.sub(r'<a[^>]*>\s*Contact\s*</a>', '', nav_content, flags=re.IGNORECASE | re.DOTALL)
            
            # Remove Book a Session button from nav
            # Matches: <button ...>Book a Session</button>
            nav_content = re.sub(r'<button[^>]*>\s*Book a Session\s*</button>', '', nav_content, flags=re.IGNORECASE | re.DOTALL)
            
            # Replace the old nav with the updated nav in the file content
            content = content.replace(original_nav, nav_content)
            
        with open(page, 'w') as f:
            f.write(content)
        
        print(f"Removed header elements in {page}")
