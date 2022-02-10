import { memo } from 'react';
import classnames from 'classnames';

import Typography from '../Typography';
import Pressable from '../Pressable';

import styles from './Tabs.module.scss';

type TabsProps = {
    tabs: Array<string>
    changeTab: (value: string) => void
    currentTab: string
};

// use in conjunction with useTabs hook
const Tabs = ({ tabs, changeTab, currentTab }: TabsProps) => (
  <div
    className={classnames('govuk-tabs lbh-tabs', styles.tabsContainer)}
    data-module="govuk-tabs"
  >
    <div className={styles.tabs}>
      {tabs?.map((tab) => (
        <Pressable
          key={tab}
          onClick={() => changeTab(tab)}
          className={classnames(styles.tabItem, {
            [styles.active]: currentTab === tab,
          })}
        >
          <Typography size="m" className={styles.tabText}>
            {tab}
          </Typography>
        </Pressable>
      ))}
    </div>
  </div>
);


export default memo(Tabs);
