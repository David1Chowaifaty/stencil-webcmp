import { newE2EPage } from '@stencil/core/testing';

describe('cm-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-spinner></cm-spinner>');

    const element = await page.find('cm-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
