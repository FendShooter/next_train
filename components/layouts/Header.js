import { useContext } from 'react';
import { Context } from '../../context/context';

function Header() {
  const result = useContext(Context);
  console.log(result.swip());
  return (
    <header className='p-4'>
      <h1>Logo heres</h1>
    </header>
  );
}

export default Header;
