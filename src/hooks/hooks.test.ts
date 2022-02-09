import React from 'react';
import type { ReactNode } from 'react';

import { renderHook, act } from '@testing-library/react-hooks';

import { useTabs, useDateInput } from './index';

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
    const setStateMock = jest.fn();
    const useStateMock = (state: ReactNode) => [state, setStateMock];

    // FIXME Type declaration for jest doesnt match with an original useState
    //  @ts-ignore
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

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
      });
    });

    act(() => {
      result.current.onChange({
        target: {
          name: 'month',
          value: '02',
        },
      });
    });

    act(() => {
      result.current.onChange({
        target: {
          name: 'year',
          value: '2000',
        },
      });
    });

    expect(result.current.isFilled).toBe(true);
  });
});
