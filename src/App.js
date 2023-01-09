import './App.css';
import 'antd/dist/antd.css';
import LoginPage from './components/login';
import MainPage from './components/main-page';
import RoutesMiddleware from './routes/routerMiddleware';

function App() {
  return (
    <div className="">
      {/* <LoginPage /> */}
      {/* <MainPage /> */}
      <RoutesMiddleware />
    </div>
  );
}

export default App;
