from pathlib import Path
import re
root=Path(__file__).parent
files=sorted([p for p in (root/'assets'/'gallery').iterdir() if p.suffix.lower() in {'.jpg','.jpeg','.png','.webp'}])
html='\\n'.join(f'<img src="assets/gallery/{p.name}" alt="WILDKID VLOGS gallery image">' for p in files)
text=(root/'index.html').read_text(encoding='utf-8')
text=re.sub(r'<div class="gallery">.*?</div>', '<div class="gallery">\\n'+html+'\\n </div>', text, count=1, flags=re.S)
(root/'index.html').write_text(text,encoding='utf-8')
print(f'Gallery updated: {len(files)} images')
