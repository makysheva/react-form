import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';

const defaultValues = {
  firstName: '',
  email: '',
  phone: '',
  language: '',
  checkbox: false,
};

const Form = () => {
  const { handleSubmit, register, formState, reset } = useForm({ defaultValues, mode: 'onChange' });

  const [checked, setChecked] = React.useState(false);

  const onSubmit = (values) => {
    console.log('ФОРМА!', values);
    setChecked(!checked);
    reset(defaultValues);
  };

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
          className={`${styles.input} ${formState.errors.firstName ? styles.hasError : ''}`}
          {...register('firstName', {
            pattern: /^[A-Za-zА-Яа-я ]+$/i,
            message: 'Введите имя без цифр',
          })}
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
            },
            required: true,
          })}
        />
        {formState.errors.email && (
          <span className={styles.red}>Введено некорректное значение</span>
        )}
      </div>
      <div className={styles.wrap}>
        <label htmlFor="phoneId" className={styles.label}>
          Номер телефона
        </label>
        <input
          type="text"
          name="phone"
          placeholder="Введите номер телефона"
          id="phoneId"
          className={styles.input}
          {...register('phone', {
            pattern: {
              value: /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
            },
            required: true,
          })}
        />
        {formState.errors.phone && (
          <span className={styles.red}>Введите корректный номер телефона</span>
        )}
      </div>
      <div className={styles.wrap}>
        <label htmlFor="langId" className={styles.label}>
          Язык
        </label>
        <select
          name="language"
          id="langId"
          className={styles.input}
          {...register('language', {
            required: true,
          })}>
          <option value="lang" selected>
            Язык
          </option>
          <option value="rus">Русский</option>
          <option value="en">Английский</option>
          <option value="ar">Арабский</option>
          <option value="kor">Корейский</option>
        </select>
      </div>
      <div className={styles.subwrap}>
        <input
          type="checkbox"
          id="checkboxId"
          name="checkbox"
          className={styles.checkboxInp}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
          {...register('checkbox', {
            required: true,
          })}
        />
        <div className={styles.defaultCheckbox}>
          {checked ? <img src="/check.png" alt="check" /> : ''}
        </div>
        <label
          htmlFor="checkboxId"
          className={styles.checkbox}
          onClick={() => setChecked(!checked)}>
          Принимаю{' '}
          <a className={styles.link} href="/">
            {' '}
            условия
          </a>{' '}
          использования
        </label>
      </div>

      <div className={styles.wrap}>
        <button
          type="submit"
          className={`${styles.button} ${!formState.isValid ? '' : styles.blue}`}
          disabled={!formState.isValid}>
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};

export default Form;
