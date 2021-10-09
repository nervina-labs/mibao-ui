import styles from './app.module.scss';
import { Button, MibaoProvider } from 'mibao-ui';

export function App() {
  return (
    <div className={styles.app}>
      <MibaoProvider>
        <Button>Button</Button>
        <Button isLoading>Button</Button>
      </MibaoProvider>
    </div>
  );
}

export default App;
