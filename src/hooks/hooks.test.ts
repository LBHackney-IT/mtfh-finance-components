import { renderHook, act } from '@testing-library/react-hooks';
import type { ChangeEvent } from 'react';
import { useTabs, useDateInput, useOnPressEnter } from './index';

const components = {
  Block: 'block',
  Estate: 'estate',
};

describe('useTabs', () => {
  it('returns correct tabContent', () => {
    const { result } = renderHook(() => useTabs(components));

    expect(result.current.tabContent).toBe('block');
  });

  it('returns correct tabsProps', () => {
    // REF https://stackoverflow.com/questions/45644098/testing-anonymous-function-equality-with-jest
    const setStateMock = expect.any(Function);

    const { result } = renderHook(() => useTabs(components));

    expect(result.current.tabsProps).toEqual({
      changeTab: setStateMock,
      currentTab: 'Block',
      tabs: ['Block', 'Estate'],
    });
  });
});

describe('useDateInput', () => {
  // NOTE Update in testing library doesnt work
  // REF https://react-hooks-testing-library.com/usage/basic-hooks#updates
  it('return true for isFilled when all field is filled', () => {
    const { result } = renderHook(() => useDateInput());

    act(() => {
      result.current.onChange({
        target: {
          name: 'day',
          value: '03',
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.onChange({
        target: {
          name: 'month',
          value: '02',
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.onChange({
        target: {
          name: 'year',
          value: '2000',
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.isFilled).toBe(true);
    expect(result.current.isPartiallyEmpty).toBe(false);
  });

  it('return true for isPartiallyEmpty when not all field are filled', () => {
    const { result } = renderHook(() => useDateInput());

    act(() => {
      result.current.onChange({
        target: {
          name: 'day',
          value: '03',
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.isPartiallyEmpty).toBe(true);
  });

  it('return null for resultDate when not all fields are filled', () => {
    const { result } = renderHook(() => useDateInput());

    act(() => {
      result.current.onChange({
        target: {
          name: 'day',
          value: '03',
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.resultDate).toBe(null);
  });

  it('return result date when not all fields are filled', () => {
    const { result } = renderHook(() => useDateInput());

    act(() => {
      result.current.onChange({
        target: {
          name: 'day',
          value: '03',
        },
      } as ChangeEvent<HTMLInputElement>);

      result.current.onChange({
        target: {
          name: 'month',
          value: '03',
        },
      } as ChangeEvent<HTMLInputElement>);

      result.current.onChange({
        target: {
          name: 'year',
          value: '2000',
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.resultDate).toBe('2000-03-03T00:00:00.000');
  });
});

describe('useOnPressEnter', () => {
  it('return result date when not all fields are filled', () => {
    const callback = jest.fn();

    const { result } = renderHook(() => useOnPressEnter(callback));

    result.current({ key: 'Enter' });

    expect(callback).toHaveBeenCalled();
  });
});
