import styles from './App.module.scss';
import Form from './components/Form';
import { FormProvider } from 'react-hook-form';

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Регистрация</h1>
      <p className={styles.subtitle}>
        Уже есть аккаунт?{' '}
        <a className={styles.link} href="/">
          Войти
        </a>
      </p>
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
