const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="">
          Имя
          <input type="text" placeholder="Введите Ваше имя" />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Email
          <input type="email" placeholder="Введите ваш email" />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Номер телефона
          <input type="text" placeholder="Введите номер телефона" />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Язык
          <select name="" id="">
            <option value="">Язык</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input type="checkbox" />
          Принимаю <a>условия</a> использования
        </label>
      </div>
      <div>
        <button type="submit">Зарегистрироваться</button>
      </div>
    </form>
  );
};

export default Form;
