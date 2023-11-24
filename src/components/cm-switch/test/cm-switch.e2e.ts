import { newE2EPage } from '@stencil/core/testing';

describe('cm-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-switch></cm-switch>');

    const element = await page.find('cm-switch');
    expect(element).toHaveClass('hydrated');
  });
});
