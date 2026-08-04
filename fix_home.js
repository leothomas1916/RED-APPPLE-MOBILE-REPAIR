const fs = require('fs');
let code = fs.readFileSync('pages/Home.tsx', 'utf8');

// Import Link
if (!code.includes('import { Link }')) {
  code = code.replace(/import React, \{ useState \} from 'react';/, "import React, { useState } from 'react';\nimport { Link } from 'react-router-dom';");
}

// Remove handleScroll function
code = code.replace(/const handleScroll = \([\s\S]*?\}\;\n/m, '');

// Replace all links to hash with react-router Links
code = code.replace(/<a\s+href="#(.*?)"[\s\S]*?onClick=\{\(e\) => handleScroll\(e, '.*?'\)\}([\s\S]*?)>([\s\S]*?)<\/a>/gm, '<Link to="/$1"$2>$3</Link>');

// We also have some missing onClick? Let's check if there are other href="#..." without handleScroll
// The script above assumes all have onClick={(e) => handleScroll(e, 'something')}
fs.writeFileSync('pages/Home.tsx', code);
