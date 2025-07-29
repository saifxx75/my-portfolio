const fs = require('fs');
const path = require('path');

// Function to recursively find all JS/JSX files in pages directory
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findPageFiles(filePath, fileList);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to replace text colors
function replaceTextColors(content) {
  const replacements = [
    // Main text colors
    { from: /text-dark-100(?!\s+dark:)/g, to: 'text-light-100 dark:text-dark-100' },
    { from: /text-dark-200(?!\s+dark:)/g, to: 'text-light-200 dark:text-dark-200' },
    { from: /text-dark-300(?!\s+dark:)/g, to: 'text-light-300 dark:text-dark-300' },
    
    // Background colors in components
    { from: /bg-dark-400\/50(?!\s+dark:)/g, to: 'bg-light-400/50 dark:bg-dark-400/50' },
    { from: /bg-dark-500(?!\s+dark:)/g, to: 'bg-light-500 dark:bg-dark-500' },
    
    // Border colors
    { from: /border-dark-300\/50(?!\s+dark:)/g, to: 'border-light-300/50 dark:border-dark-300/50' },
  ];
  
  let result = content;
  replacements.forEach(({ from, to }) => {
    result = result.replace(from, to);
  });
  
  return result;
}

// Main execution
const pagesDir = path.join(__dirname, 'src', 'pages');
const files = findPageFiles(pagesDir);

console.log(`Found ${files.length} page files to process...`);

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = replaceTextColors(content);
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Text color replacement completed!');