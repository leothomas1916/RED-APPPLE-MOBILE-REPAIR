import re
import glob

for file in glob.glob('pages/*.tsx'):
    with open(file, 'r') as f:
        code = f.read()
    
    original_code = code

    if 'href="#' in code or 'handleScroll' in code:
        if 'import { Link }' not in code:
            code = code.replace("import React", "import { Link } from 'react-router-dom';\nimport React")
        
        # Remove handleScroll function
        code = re.sub(r'  const handleScroll = \(.*?\).*?\}\;\n\n', '', code, flags=re.DOTALL)
        
        # Replace <a href="#..." ...> with Link
        def repl(m):
            return f'<Link to="/{m.group(1)}"{m.group(2)}>{m.group(3)}</Link>'
        
        # for a tags with href="#"
        code = re.sub(r'<a\s+href="#(.*?)"\s*([\s\S]*?)>([\s\S]*?)</a>', repl, code)
        
        if code != original_code:
            with open(file, 'w') as f:
                f.write(code)
            print(f"Updated {file}")

