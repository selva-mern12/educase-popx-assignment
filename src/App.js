import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import Signup from './components/SignUp';
import SignIn from './components/SignIn';
import Account from './components/Account';
import './App.css';

function App() {
  const [page, setPage] = useState('')

  useEffect(() => {
    document.title = "Welcome - Educase PopX";
  })

  const pageHandler = authPage => {
    setPage(authPage)
  }

  let content;
  switch (page) {
    case 'signup':
      content = <Signup pageHandler={pageHandler} />;
      break;
    case 'signin':
      content = <SignIn pageHandler={pageHandler} />;
      break;
    case 'account':
      content = <Account pageHandler={pageHandler} />;
      break;
    default:
      content = <Welcome pageHandler={pageHandler} />;
      break;
  }

  return (
    <div className='bg-white h-screen m-0'>
      {content}
    </div>
  );
}

export default App;
