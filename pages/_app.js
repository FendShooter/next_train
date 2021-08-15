import 'tailwindcss/tailwind.css'
import Layouts from '../components/layouts/Layouts';
import ContextProvider from '../context/context';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </ContextProvider>
  );
}

export default MyApp
