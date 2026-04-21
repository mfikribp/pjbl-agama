const fs = require('fs');
const code = fs.readFileSync('materi.js', 'utf8');
const regex = /<span class="arab(?:-sm)?".*?>(.*?)<\/span>/g;
let m;
const matches = [];
while ((m = regex.exec(code)) !== null) {
  matches.push(m[1].trim());
}
console.log(JSON.stringify([...new Set(matches)], null, 2));
