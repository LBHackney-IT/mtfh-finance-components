import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalButtons from './ModalButtons';

describe('ModalButtons', () => {
  it('renders with given confirm text', () => {
    render(<ModalButtons confirmText="Save" />);

    const content = screen.getByText('Save');

    expect(content).toBeInTheDocument();
  });

  it('renders with given cancel text', () => {
    render(<ModalButtons cancelText="cancel" />);

    const content = screen.getByText('cancel');

    expect(content).toBeInTheDocument();
  });

  it('renders cancel button withCancel', () => {
    render(<ModalButtons withCancel />);

    const content = screen.getByTestId('cancel-button');

    expect(content).toBeInTheDocument();
  });

  it('does not renders cancel button when withCancel is false', () => {
    render(<ModalButtons withCancel={false} />);

    const content = screen.queryByTestId('cancel-button');

    expect(content).toBeNull();
  });

  it('fires onConfirm', () => {
    const onConfirm = jest.fn();

    render(<ModalButtons onConfirm={onConfirm} withCancel confirmText="Save" />);

    const content = screen.getByText('Save');

    userEvent.click(content);

    expect(onConfirm).toHaveBeenCalled();
  });

  it('fires onCancel', () => {
    const onCancel = jest.fn();

    render(<ModalButtons onCancel={onCancel} withCancel cancelText="cancel" />);

    const content = screen.getByText('cancel');

    userEvent.click(content);

    expect(onCancel).toHaveBeenCalled();
  });
});
