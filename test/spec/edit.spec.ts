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

test('Exposes the break as a separator', async ({ page }) => {
  const edit = new Edit(page);
  // Attached rather than visible — the divider renders as a zero-height <hr>.
  await expect(edit.separator).toBeAttached();
});
