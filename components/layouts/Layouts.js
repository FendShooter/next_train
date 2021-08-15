const { default: Footer } = require('./Footer');
const { default: Header } = require('./Header');

function Layouts({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layouts;
