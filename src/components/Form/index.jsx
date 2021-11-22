import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';

const Form = () => {
  const { handleSubmit, register, formState, reset } = useForm();

  const onSubmit = (values) => {
    console.log('ФОРМА!', values);
    reset();
  };

  console.log(`errors: ${formState}`);

  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrap}>
        <label htmlFor="nameId" className={styles.label}>
          Имя
        </label>
        <input
          type="text"
          placeholder="Введите Ваше имя"
          id="nameId"
          name="firstName"
          className={styles.input}
          {...register('firstName', {
            pattern: /^[A-Za-z]+$/i,
            required: true,
          })}
          style={{ ...styles.input, borderColor: formState.errors.firstName && 'red' }}
        />
      </div>
      <div className={styles.wrap}>
        <label htmlFor="emailId" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          placeholder="Введите ваш email"
          id="emailId"
          className={styles.input}
          name="email"
          {...register('email', {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
              message: 'Это неверная почта!',
            },
            required: true,
          })}
        />
      </div>
      <div className={styles.wrap}>
        <label htmlFor="phoneId" className={styles.label}>
          Номер телефона
        </label>
        <input
          type="text"
          placeholder="Введите номер телефона"
          id="phoneId"
          className={styles.input}
        />
      </div>
      <div className={styles.wrap}>
        <label htmlFor="langId" className={styles.label}>
          Язык
        </label>
        <select name="" id="langId" className={styles.input}>
          <option value="">Язык</option>
          <option value="">Русский</option>
          <option value="">Английский</option>
          <option value="">Арабский</option>
          <option value="">Корейский</option>
        </select>
      </div>
      <div className={styles.subwrap}>
        <input type="checkbox" id="checkboxId" className={styles.checkboxInp} />
        <div className={styles.defaultCheckbox}></div>
        <label htmlFor="checkboxId" className={styles.checkbox}>
          Принимаю{' '}
          <a className={styles.link} href="#">
            {' '}
            условия
          </a>{' '}
          использования
        </label>
      </div>
      <div className={styles.wrap}>
        <button
          type="submit"
          className={styles.button}
          disabled={formState.isSubmitting}
          // style={{ ...styles.button, borderColor: formState.isSubmitting && 'red' }}
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};

export default Form;
