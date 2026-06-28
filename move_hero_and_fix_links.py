import os
import shutil

# 1. Move the image if it exists
src_img = '/Users/mpavan/Documents/Srinivas/src/app/images/hero.PNG'
dest_dir = '/Users/mpavan/Documents/Srinivas/public/images'
dest_img = os.path.join(dest_dir, 'hero.PNG')

if os.path.exists(src_img):
    os.makedirs(dest_dir, exist_ok=True)
    shutil.move(src_img, dest_img)
    print(f"Moved {src_img} to {dest_img}")
else:
    print(f"Warning: {src_img} does not exist.")

# 2. Update src/app/page.tsx
page_path = '/Users/mpavan/Documents/Srinivas/src/app/page.tsx'
if os.path.exists(page_path):
    with open(page_path, 'r') as f:
        content = f.read()
    
    # Replace the remote URL for hero image with the local one
    # The remote URL: https://lh3.googleusercontent.com/aida-public/AB6AXuCrPGoXf9pDWeUl3F7H3FQiK2_wTVyttBXSx_JL1XlIlbG1TDaSv1w6fhW8FWk50JQOKo5117xHsx3pSNctfrjTvDyTYleS62ohSeaca5FE02y1dxILAI5703mOQO9ssbjLaecni57AGeUTAWWwY2ler6h5WFJVZ3Ft3NYHuLSgKzd9gvo_lFPyv53FrCTEI-RjGy1AkSRUGadbd_MgA6P9axBPSt3_PzODpiwOIUNg0QpOtK5BNeRBjmj4KmoK2J4X1YBvlqqNUpI
    remote_url = "https://lh3.googleusercontent.com/aida-public/AB6AXuCrPGoXf9pDWeUl3F7H3FQiK2_wTVyttBXSx_JL1XlIlbG1TDaSv1w6fhW8FWk50JQOKo5117xHsx3pSNctfrjTvDyTYleS62ohSeaca5FE02y1dxILAI5703mOQO9ssbjLaecni57AGeUTAWWwY2ler6h5WFJVZ3Ft3NYHuLSgKzd9gvo_lFPyv53FrCTEI-RjGy1AkSRUGadbd_MgA6P9axBPSt3_PzODpiwOIUNg0QpOtK5BNeRBjmj4KmoK2J4X1YBvlqqNUpI"
    content = content.replace(remote_url, "/images/hero.PNG")
    
    # Fix the navigation links in the header of page.tsx
    # We want to replace the specific blocks:
    # Yoga link
    content = content.replace(
        '''            <a
              className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
              href="#"
            >
              Yoga
            </a>''',
        '''            <a
              className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
              href="/yoga"
            >
              Yoga
            </a>'''
    )
    
    # Fitness link
    content = content.replace(
        '''            <a
              className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
              href="#"
            >
              Fitness
            </a>''',
        '''            <a
              className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
              href="/fitness"
            >
              Fitness
            </a>'''
    )

    # Gallery link
    content = content.replace(
        '''            <a
              className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
              href="#"
            >
              Gallery
            </a>''',
        '''            <a
              className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
              href="/gallery"
            >
              Gallery
            </a>'''
    )

    with open(page_path, 'w') as f:
        f.write(content)
        
    print("Updated page.tsx with local hero image and fixed navigation links.")
