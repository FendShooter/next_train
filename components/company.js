import Link from 'next/link';

function Company({ name, id, category }) {
  return (
    <div className='md:w-[320px] p-4 border rounded shadow-md w-screen'>
      <h1 className='text-gray-600 text-2xl my-4'>{name}</h1>
      <div>
        Category : <span className='text-indigo-600'> {category}</span>
      </div>
      <div className='w-full text-right '>
        <span className='text-indigo-600  cursor-pointer'>
          {/* <Link href={`/blog/${id}`}>more</Link> */}
        </span>
      </div>
    </div>
  );
}

export default Company;
