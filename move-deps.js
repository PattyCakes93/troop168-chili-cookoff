const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Move vite and nanoid to dependencies (they're imported in server bundle)
const depsToMove = ['vite'];

depsToMove.forEach(dep => {
  if (pkg.devDependencies[dep]) {
    pkg.dependencies[dep] = pkg.devDependencies[dep];
    delete pkg.devDependencies[dep];
    console.log(`Moved ${dep} to dependencies`);
  }
});

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log('Done!');
