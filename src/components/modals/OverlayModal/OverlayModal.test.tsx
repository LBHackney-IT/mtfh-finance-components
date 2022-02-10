import { render, screen } from '@testing-library/react';
import Modal from 'react-modal';

import OverlayModal from './index';

describe('OverlayModal', () => {
  it('if open correctly shows children', () => {
    Modal.setAppElement(document.body);
    render(<OverlayModal isOpen>content</OverlayModal>);

    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('blocks body', () => {
    Modal.setAppElement(document.body);
    render(<OverlayModal isOpen>content</OverlayModal>);

    expect(document.body).toHaveStyle({ overflow: 'hidden' });
  });

  it('appends className', () => {
    Modal.setAppElement(document.body);
    render(
      <OverlayModal isOpen className="testClassName">
        content
      </OverlayModal>
    );

    expect(screen.getByText('content')).toHaveClass('testClassName');
  });
});
