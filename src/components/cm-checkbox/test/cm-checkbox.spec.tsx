import { newSpecPage } from '@stencil/core/testing';
import { CmCheckbox } from '../cm-checkbox';

describe('cm-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmCheckbox],
      html: `<cm-checkbox></cm-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-checkbox>
    `);
  });
});
