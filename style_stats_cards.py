import os

page_path = '/Users/mpavan/Documents/Srinivas/src/app/page.tsx'

if os.path.exists(page_path):
    with open(page_path, 'r') as f:
        content = f.read()
    
    start_tag = '{/* Stats Section (Glassmorphism Cards) */}'
    end_tag = '</section>'
    
    start_idx = content.find(start_tag)
    if start_idx != -1:
        end_idx = content.find(end_tag, start_idx)
        if end_idx != -1:
            end_idx += len(end_tag)
            original_section = content[start_idx:end_idx]
            
            new_section = '''{/* Stats Section (Glassmorphism Cards) */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Stat Card 1 */}
              <div className="glass-card p-8 rounded-xl text-center flex flex-col items-center gap-4 reveal transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/30 hover:bg-white/40 cursor-pointer">
                <p className="font-bold text-base md:text-lg text-on-surface-variant uppercase tracking-widest">
                  Years Yoga Experience
                </p>
                <h3
                  className="font-display-lg-mobile text-headline-lg text-primary font-bold counter"
                  data-target="15"
                >
                  0
                </h3>
              </div>
              {/* Stat Card 2 */}
              <div
                className="glass-card p-8 rounded-xl text-center flex flex-col items-center gap-4 reveal transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/30 hover:bg-white/40 cursor-pointer"
                style={{ transitionDelay: "100ms" }}
              >
                <p className="font-bold text-base md:text-lg text-on-surface-variant uppercase tracking-widest">
                  Certifications
                </p>
                <h3
                  className="font-display-lg-mobile text-headline-lg text-primary font-bold counter"
                  data-target="3"
                >
                  0
                </h3>
              </div>
              {/* Stat Card 3 */}
              <div
                className="glass-card p-8 rounded-xl text-center flex flex-col items-center gap-4 reveal transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/30 hover:bg-white/40 cursor-pointer"
                style={{ transitionDelay: "200ms" }}
              >
                <p className="font-bold text-base md:text-lg text-on-surface-variant uppercase tracking-widest">
                  Yoga Competitions
                </p>
                <h3
                  className="font-display-lg-mobile text-headline-lg text-primary font-bold counter"
                  data-target="25"
                >
                  0
                </h3>
              </div>
            </div>
          </div>
        </section>'''
            
            content = content.replace(original_section, new_section)
            with open(page_path, 'w') as f:
                f.write(content)
            print("Successfully updated stats section styles: text size, weight, colors, and hovers.")
        else:
            print("Failed to find end tag of stats section.")
    else:
        print("Failed to find start tag of stats section.")
else:
    print("Page does not exist.")
