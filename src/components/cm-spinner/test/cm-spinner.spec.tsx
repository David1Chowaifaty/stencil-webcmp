import { newSpecPage } from '@stencil/core/testing';
import { CmSpinner } from '../cm-spinner';

describe('cm-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmSpinner],
      html: `<cm-spinner></cm-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-spinner>
    `);
  });
});
