import { newE2EPage } from '@stencil/core/testing';

describe('cm-sheet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-sheet></cm-sheet>');

    const element = await page.find('cm-sheet');
    expect(element).toHaveClass('hydrated');
  });
});
