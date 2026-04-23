import { expect, test } from '@playwright/test';
import { elementClient } from '@tailor-cms/cek-e2e';

import { Edit } from '../pom';

const ELEMENT_ID = 'test-page-break-edit';

test.beforeEach(async ({ page }) => {
  await elementClient.reset(ELEMENT_ID);
  await page.goto(`/?id=${ELEMENT_ID}`);
  await page.waitForLoadState('networkidle');
});

test('Renders section break label', async ({ page }) => {
  const edit = new Edit(page);
  await expect(edit.root).toContainText('Section break');
});

test.afterAll(async () => {
  await elementClient.reset(ELEMENT_ID);
});
