import { render, screen } from '@testing-library/react';
import { Accordion } from './index';

describe('Accordion', () => {
  it('renders with given text', () => {
    render(
      <Accordion isExpanded>
        <div>Handler</div>
      </Accordion>
    );

    const content = screen.getByText('Handler');

    expect(content).toBeInTheDocument();
  });
});
