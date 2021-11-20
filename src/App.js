import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Регистрация</h1>
      <p>
        Уже есть аккаунт? <a>Войти</a>
      </p>
      <Form />
    </div>
  );
}

export default App;
