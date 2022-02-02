import { memo } from 'react';
import type { ReactNode } from 'react';
import { useToggle } from 'react-use';
import classnames from 'classnames';

//  @ts-ignore
import LinkArrow from '../../../assets/link-arrow.svg';
import styles from './InformationBlock.module.scss';

import Pressable from '../../ui/Pressable';
import Typography from '../../ui/Typography';
import { Accordion, AccordionDetails, AccordionSummary } from '../../ui/Accordion';

export type InformationBlockData = {
  id: string | number;
  value: ReactNode;
  label: ReactNode;
};

export type InformationBlockVariant = 'main' | 'regular';

export type InformationBlockProps = {
  className?: string;
  variant?: InformationBlockVariant;
  dataInRow?: boolean;
  data: Array<InformationBlockData>;
  header: string;
  icon: ReactNode;
};

const InformationBlock = ({
  data,
  header,
  icon,
  className = '',
  variant = 'regular',
  dataInRow = false,
}: InformationBlockProps) => {
  const [isExpanded, toggleExpanded] = useToggle(true);

  return (
    <section className={classnames(styles.wrapper, styles[variant], className)}>
      <Accordion isExpanded={isExpanded}>
        <AccordionSummary>
          <div className={styles.header}>
            {icon}

            <Typography variant="h4" className="mt-0 ml-10">
              {header}
            </Typography>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <div
            data-testid="information-block-values"
            className={classnames(styles.values, 'InformationBlock__values', {
              [styles.dataInRow]: dataInRow,
            })}
          >
            {data?.map((item) => (
              <div key={item.id ?? item.label}>
                <Typography size="s">{item.value ?? '-'}</Typography>

                {item.label && (
                  <Typography className={styles.informationValue} weight={700} size="s">
                    {item.label}
                  </Typography>
                )}
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      <Pressable className={styles.button} onClick={toggleExpanded}>
        <Typography size="s">{isExpanded ? 'Collapse' : 'Expand'}</Typography>
        <LinkArrow className={isExpanded ? styles.imageTop : styles.imageBottom} />
      </Pressable>
    </section>
  );
};

export default memo(InformationBlock);
