import type { Locator, Page } from '@playwright/test';
import { pom } from '@tailor-cms/cek-e2e';

export class Display extends pom.DisplayPanel {
  readonly root: Locator;
  readonly nextBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.root = this.editor.locator('.tce-root');
    this.nextBtn = this.editor.getByRole('button', { name: 'Next' });
  }
}
