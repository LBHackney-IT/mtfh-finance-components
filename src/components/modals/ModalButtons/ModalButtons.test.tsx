import { render, screen } from '@testing-library/react';
import ModalButtons from './ModalButtons';

describe('ModalButtons', () => {
  it('renders with given confirm text', () => {
    render(<ModalButtons confirmText="Save" />);

    const content = screen.getByText('Save');

    expect(content).toBeInTheDocument();
  });

  it('renders with given cancel text', () => {
    render(<ModalButtons confirmText="Cancel" />);

    const content = screen.getByText('Cancel');

    expect(content).toBeInTheDocument();
  });

  it('renders cancel button withCancel', () => {
    render(<ModalButtons withCancel />);

    const content = screen.getByTestId('cancel-button');

    expect(content).toBeInTheDocument();
  });
});
