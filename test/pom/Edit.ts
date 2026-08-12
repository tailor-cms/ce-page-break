import type { Locator, Page } from '@playwright/test';
import { pom } from '@tailor-cms/cek-e2e';

export class Edit extends pom.EditPanel {
  readonly root: Locator;
  readonly separator: Locator;

  constructor(page: Page) {
    super(page);
    this.root = this.editor.locator('.tce-page-break');
    // VDivider renders an <hr> on each side of the slot content, so scope to
    // the first to keep the locator strict-mode safe.
    this.separator = this.editor.getByRole('separator').first();
  }
}
