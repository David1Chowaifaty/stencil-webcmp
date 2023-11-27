import { newSpecPage } from '@stencil/core/testing';
import { CmDialog } from '../cm-dialog';

describe('cm-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmDialog],
      html: `<cm-dialog></cm-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-dialog>
    `);
  });
});
