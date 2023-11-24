import { newSpecPage } from '@stencil/core/testing';
import { CmSwitch } from '../cm-switch';

describe('cm-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmSwitch],
      html: `<cm-switch></cm-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-switch>
    `);
  });
});
