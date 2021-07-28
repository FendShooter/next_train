import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function Just({ result }) {
  const router = useRouter();
  const [check, setCheck] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/newsletter');
      const { note } = await response.json();
      setCheck(false);
      setResults(note);
    };
    fetchData();
  }, [check]);

  const deleteHandler = async (id) => {
    const response = await fetch(`/api/${id}`);
    const result = await response.json();
    // router.push('/newsletter');
    setCheck(true);
    return result;
  };

  return (
    <div className='sm:container border mx-auto'>
      {results.map((i) => (
        <li key={i._id} className='my-4'>
          {i.email}{' '}
          <button
            className='bg-pink-500 rounded text-white px-4 py-2'
            onClick={() => deleteHandler(i._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3000/api/newsletter');
//   const { note } = await response.json();
//   return {
//     props: {
//       result: note,
//     },
//   };
// };
export default Just;
