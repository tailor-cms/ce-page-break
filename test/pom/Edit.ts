import type { Locator, Page } from '@playwright/test';
import { pom } from '@tailor-cms/cek-e2e';

export class Edit extends pom.EditPanel {
  readonly root: Locator;

  constructor(page: Page) {
    super(page);
    this.root = this.editor.locator('.tce-page-break');
  }
}
