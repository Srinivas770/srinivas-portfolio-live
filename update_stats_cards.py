import os

page_path = '/Users/mpavan/Documents/Srinivas/src/app/page.tsx'

if os.path.exists(page_path):
    with open(page_path, 'r') as f:
        content = f.read()
    
    # Locate the entire Stats Section block
    # Start line is: {/* Stats Section (Glassmorphism Cards) */}
    # End is the end of the section
    
    start_tag = '{/* Stats Section (Glassmorphism Cards) */}'
    end_tag = '</section>'
    
    start_idx = content.find(start_tag)
    if start_idx != -1:
        # Find the closing </section> after start_idx
        end_idx = content.find(end_tag, start_idx)
        if end_idx != -1:
            end_idx += len(end_tag)
            original_section = content[start_idx:end_idx]
            
            new_section = '''{/* Stats Section (Glassmorphism Cards) */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Stat Card 1 */}
              <div className="glass-card p-8 rounded-xl text-center flex flex-col items-center gap-2 reveal">
                <svg className="w-10 h-10 text-primary mb-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3
                  className="font-display-lg-mobile text-headline-lg text-on-background font-bold counter"
                  data-target="15"
                >
                  0
                </h3>
                <p className="font-label-caps text-on-surface-variant">
                  Years Yoga Experience
                </p>
              </div>
              {/* Stat Card 2 */}
              <div
                className="glass-card p-8 rounded-xl text-center flex flex-col items-center gap-2 reveal"
                style={{ transitionDelay: "100ms" }}
              >
                <svg className="w-10 h-10 text-primary mb-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.068-1.593 3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <h3
                  className="font-display-lg-mobile text-headline-lg text-on-background font-bold counter"
                  data-target="3"
                >
                  0
                </h3>
                <p className="font-label-caps text-on-surface-variant">
                  Certifications
                </p>
              </div>
              {/* Stat Card 3 */}
              <div
                className="glass-card p-8 rounded-xl text-center flex flex-col items-center gap-2 reveal"
                style={{ transitionDelay: "200ms" }}
              >
                <svg className="w-10 h-10 text-primary mb-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-5.25a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9m9-11.25h.878c1.431 0 2.58 1.18 2.527 2.61a5.625 5.625 0 01-8.528 4.887m-4.5-7.5h-.878c-1.431 0-2.58 1.18-2.527 2.61a5.625 5.625 0 008.528 4.887m-4.5-7.5V12m0 0h3.375a1.125 1.125 0 011.125 1.125V18" />
                </svg>
                <h3
                  className="font-display-lg-mobile text-headline-lg text-on-background font-bold counter"
                  data-target="25"
                >
                  0
                </h3>
                <p className="font-label-caps text-on-surface-variant">
                  Yoga Competitions
                </p>
              </div>
            </div>
          </div>
        </section>'''
            
            content = content.replace(original_section, new_section)
            with open(page_path, 'w') as f:
                f.write(content)
            print("Successfully updated stats section in page.tsx.")
        else:
            print("Failed to find end tag of stats section.")
    else:
        print("Failed to find start tag of stats section.")
else:
    print("Page does not exist.")
