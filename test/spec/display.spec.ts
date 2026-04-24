import { elementClient, pom } from '@tailor-cms/cek-e2e';
import { expect, test } from '@playwright/test';

import { Display } from '../pom';

const ELEMENT_ID = 'test-page-break-display';

test.beforeEach(async ({ page }) => {
  await elementClient.reset(ELEMENT_ID);
  await elementClient.resetState(ELEMENT_ID);
  await page.goto(`/?id=${ELEMENT_ID}`);
  await page.waitForLoadState('networkidle');
});

test('Renders Next button', async ({ page }) => {
  const display = new Display(page);
  await expect(display.nextBtn).toBeVisible();
});

test('Clicking Next emits an interaction', async ({ page }) => {
  const display = new Display(page);
  const bottomPanel = new pom.BottomPanel(page);
  await display.nextBtn.click();
  await bottomPanel.openUserStateTab();
  await expect(
    bottomPanel.userStateWindow.getByText('clickedAt').first(),
  ).toBeVisible();
});
