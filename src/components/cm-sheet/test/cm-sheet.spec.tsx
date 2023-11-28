import { newSpecPage } from '@stencil/core/testing';
import { CmSheet } from '../cm-sheet';

describe('cm-sheet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmSheet],
      html: `<cm-sheet></cm-sheet>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-sheet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-sheet>
    `);
  });
});
