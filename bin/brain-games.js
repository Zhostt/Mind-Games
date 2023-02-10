/* #!/usr/bin/env node    // Это шабанг, он добавляет к исполняюще строчке то что в нем прописано.
Но в моем VS Code он не работает, а в REPL работает все равно, потому отключен. */

import greeting from '../src/cli.js';

console.log('node bin/brain-games.js\nWelcome to the Brain Games!');
greeting();
