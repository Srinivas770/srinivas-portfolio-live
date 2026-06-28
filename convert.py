import os
import re

def convert_html_to_jsx(html_content, component_name):
    # Extract body content (excluding <script> tags at the end)
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
    if not body_match:
        return ""
    
    body = body_match.group(1)
    
    # Remove script tags
    body = re.sub(r'<script.*?>.*?</script>', '', body, flags=re.DOTALL)
    
    # Replace class with className
    body = body.replace(' class="', ' className="')
    
    # Fix self-closing tags like img, hr, input, br
    body = re.sub(r'<img([^>]*)>', r'<img\1 />', body)
    body = re.sub(r'<input([^>]*)>', r'<input\1 />', body)
    body = re.sub(r'<hr([^>]*)>', r'<hr\1 />', body)
    body = re.sub(r'<br([^>]*)>', r'<br\1 />', body)
    # Fix <path> elements that might not be closed or self-closed
    body = re.sub(r'<path([^>]*[^/])>', r'<path\1></path>', body) # Quick and dirty if they don't have closing tags, but usually they do.
    
    # Fix viewBox
    body = body.replace('viewbox="', 'viewBox="')
    
    # Fix inline styles (very naive approach)
    # style="background-image: url('...'); --progress: 95"
    def style_replacer(match):
        style_str = match.group(1)
        styles = {}
        for part in style_str.split(';'):
            if ':' in part:
                k, v = part.split(':', 1)
                k = k.strip()
                v = v.strip()
                # convert kebab-case to camelCase
                if not k.startswith('--'):
                    parts = k.split('-')
                    k = parts[0] + ''.join(x.title() for x in parts[1:])
                styles[k] = v.strip("'").strip('"')
        
        # build dict string
        style_dict_str = "{" + ", ".join(f"'{k}': '{v}'" for k, v in styles.items()) + "}"
        return f"style={{{style_dict_str}}}"

    body = re.sub(r'style="([^"]*)"', style_replacer, body)

    # Fix links
    body = body.replace('href="#"', 'href="/"')
    
    # Some fixes for specific tags
    body = body.replace('<!--', '{/*').replace('-->', '*/}')
    body = body.replace('    ', '  ')
    
    # Add Link imports
    jsx = f""""use client";
import Link from "next/link";
import {{ useEffect }} from "react";

export default function {component_name}() {{
  useEffect(() => {{
    // Add basic scroll reveal
    const observerOptions = {{ threshold: 0.1 }};
    const observer = new IntersectionObserver((entries) => {{
      entries.forEach(entry => {{
        if (entry.isIntersecting) {{
          entry.target.classList.add('active', 'opacity-100', 'translate-y-0');
        }}
      }});
    }}, observerOptions);
    
    document.querySelectorAll('.reveal, .glass-card').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }}, []);

  return (
    <>
      {body}
    </>
  );
}}
"""
    return jsx

files = [
    ('yoga.html', 'Yoga', 'yoga'),
    ('fitness.html', 'Fitness', 'fitness'),
    ('gallery.html', 'Gallery', 'gallery'),
    ('contact.html', 'Contact', 'contact')
]

for filename, comp_name, route in files:
    if os.path.exists(filename):
        with open(filename, 'r') as f:
            content = f.read()
        jsx_code = convert_html_to_jsx(content, comp_name)
        
        # Create directory
        os.makedirs(f"src/app/{route}", exist_ok=True)
        
        # Write file
        with open(f"src/app/{route}/page.tsx", 'w') as f:
            f.write(jsx_code)
        
        print(f"Generated src/app/{route}/page.tsx")
