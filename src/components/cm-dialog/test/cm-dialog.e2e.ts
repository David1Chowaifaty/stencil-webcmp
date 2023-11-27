import { newE2EPage } from '@stencil/core/testing';

describe('cm-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-dialog></cm-dialog>');

    const element = await page.find('cm-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
