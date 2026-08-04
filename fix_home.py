import re

with open('pages/Home.tsx', 'r') as f:
    code = f.read()

if 'import { Link }' not in code:
    code = code.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { Link } from 'react-router-dom';")

# Remove handleScroll function
code = re.sub(r'  const handleScroll = \(.*?\).*?\}\;\n\n', '', code, flags=re.DOTALL)

# Replace <a href="#booking" onClick={(e) => handleScroll(e, 'booking')} className="...">...</a>
# with <Link to="/booking" className="...">...</Link>
def repl(m):
    return f'<Link to="/{m.group(1)}"{m.group(2)}>{m.group(3)}</Link>'

code = re.sub(r'<a\s+href="#(.*?)"\s*onClick=\{.*?handleScroll.*?\}\s*([\s\S]*?)>([\s\S]*?)</a>', repl, code)

with open('pages/Home.tsx', 'w') as f:
    f.write(code)

