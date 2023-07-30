import styles from './Content.module.scss';

interface ContentProps  { 
  children: React.ReactNode;
}

export const Content = ({children }: ContentProps) => (
  <section className={styles.content}>
    {children}
  </section>
);
