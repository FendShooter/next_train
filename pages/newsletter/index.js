import { useRef } from 'react';

function Newsletter() {
  const emailRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className=' grid place-items-center h-full  border m-auto'>
      <form onSubmit={submitHandler}>
        <div className='m-4'>
          <label htmlFor='id'>user Name:</label>
          <input type='text' ref={emailRef} />
        </div>
        <button
          type='submit'
          className='bg-indigo-400 px-8 rounded-md text-white shadow-md py-2 text-2xl'
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Newsletter;


