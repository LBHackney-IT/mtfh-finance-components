import { render, screen } from '@testing-library/react';

import AssetIcon from './index';

describe('AssetIcon', () => {
  it('renders with big when isBig is true', () => {
    render(<AssetIcon type="garage" isBig />);

    const content = screen.getByTestId('asset-icon');

    expect(content).toHaveClass('big');
  });
});
