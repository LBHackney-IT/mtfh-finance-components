import { customRender, screen } from '@helpers/test-utils';

import OverlayModal from './index';

describe('OverlayModal', () => {
  it('if open correctly shows children', () => {
    customRender(<OverlayModal isOpen>content</OverlayModal>);

    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('blocks body', () => {
    customRender(<OverlayModal isOpen>content</OverlayModal>);

    expect(document.body).toHaveStyle({ overflow: 'hidden' });
  });

  it('appends className', () => {
    customRender(
      <OverlayModal isOpen className="testClassName">
        content
      </OverlayModal>
    );

    expect(screen.getByText('content')).toHaveClass('testClassName');
  });
});
