const { Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

Then(/^All visible important elements of (.*) should have vispdata-testid attribute$/, async function (featureName) {
  const allElements = await $$('*');
  const missingTestIds = [];

  for (const el of allElements) {
    try {
      const isDisplayed = await el.isDisplayed();
      if (!isDisplayed) continue;

      const tagName = await el.getTagName();
      if (!tagName || ['script', 'style', 'meta', 'head', 'title', 'noscript'].includes(tagName)) continue;

      const vispAttr = await el.getAttribute('vispdata-testid');
      if (!vispAttr) {
        const elementDetails = {
          tagName,
          id: await el.getAttribute('id'),
          className: await el.getAttribute('class'),
          name: await el.getAttribute('name'),
          placeholder: await el.getAttribute('placeholder'),
          text: await el.getText(),
          type: await el.getAttribute('type'),
          href: await el.getAttribute('href'),
          ariaLabel: await el.getAttribute('aria-label'),
          role: await el.getAttribute('role'),
          xpath: el.selector, // WebdriverIO selector
        };

        missingTestIds.push(elementDetails);
      }
    } catch (err) {
      console.warn(`⚠️ Error checking element: ${err.message}`);
    }
  }

  if (missingTestIds.length > 0) {
    const outPath = path.join(__dirname, '../logs/'+ featureName +'-missing-vispdata-testid.json');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(missingTestIds, null, 2));

    throw new Error(
      `❌ Found ${missingTestIds.length} visible elements without vispdata-testid.\nSee log at: ${outPath}`
    );
  } else {
    console.log('✅ All visible elements have vispdata-testid.');
  }
});