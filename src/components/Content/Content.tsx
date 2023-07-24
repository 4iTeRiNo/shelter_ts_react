import styles from './Content.module.scss';

interface ContentProps  { 
  children: React.ReactNode;
}

export const Content = ({children }: ContentProps) => (
  <div className={styles.content}>
    {children}
  </div>
);
