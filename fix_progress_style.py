import os
import re

page = 'src/app/fitness/page.tsx'

if os.path.exists(page):
    with open(page, 'r') as f:
        content = f.read()
    
    # Replace style={{'--progress': '...'}} with style={{'--progress': '...'} as React.CSSProperties}
    # Matches: style={{'--progress': 'XX'}}
    content = re.sub(
        r"style=\{\{\s*\'--progress\':\s*\'(\d+)\'\s*\}\}",
        r"style={{'--progress': '\1'} as React.CSSProperties}",
        content
    )
    
    with open(page, 'w') as f:
        f.write(content)
    
    print(f"Fixed CSS variables style in {page}")
