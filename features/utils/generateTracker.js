const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-writer').createObjectCsvWriter;

// Configure the path to your Page Object files
const pageObjectsDir = path.join(__dirname, '../pageobjects');

// Define the output CSV file for the tracker
const csvFile = 'selectors-tracker.csv';

const csvOutput = csvWriter({
  path: csvFile,
  header: [
    { id: 'componentName', title: 'Component Name' },
    { id: 'page', title: 'Page/Feature' },
    { id: 'objectName', title: 'Object Name' },
    { id: 'currentSelector', title: 'Current Selector' },
    { id: 'stableAttribute', title: 'Stable Attribute Required' },
    { id: 'reason', title: 'Reason for Request' },
    { id: 'priority', title: 'Priority' },
  ],
});

// Function to extract selectors from a file
function extractSelectors(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const selectorRegex = /get\s+(\w+)\s*\(\)\s*{\s*return\s+browser\.\$\(([^)]+)\);\s*}/g; // Match selectors
  const matches = [...content.matchAll(selectorRegex)];

  return matches.map((match) => ({
    methodName: match[1],
    selector: match[2].trim()
  })); // Return only selector strings
}

// Function to scan all Page Object files
function scanPageObjects() {
  const records = [];
  const files = fs.readdirSync(pageObjectsDir);

  files.forEach((file) => {
    const filePath = path.join(pageObjectsDir, file);
    if (fs.statSync(filePath).isFile() && file.endsWith('.js')) {
      const selectors = extractSelectors(filePath);

      selectors.forEach((selector) => {
        records.push({
          componentName: path.basename(file, '.js'), // Use filename as component name
          page: '', // Add page/feature info manually later
          objectName: selector.methodName,
          currentSelector: selector.selector,
          stableAttribute: '', // Placeholder for stable attribute
          reason: '', // Placeholder for reason
          priority: 'Medium', // Default priority
        });
      });
    }
  });

  return records;
}

// Generate the CSV
(async () => {
  try {
    const selectors = scanPageObjects();
    await csvOutput.writeRecords(selectors);
    console.log(`Selectors successfully exported to ${csvFile}`);
  } catch (error) {
    console.error('Error generating tracker:', error);
  }
})();
