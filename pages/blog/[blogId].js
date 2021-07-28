import { getData } from '../api/newsletter';

function Details({ company }) {
  // const { name, start, end, category } = company;
  return (
    <div className='grid grid-cols-2 w-[960px] m-auto my-6  '>
      <div>
        <img
          src='https://picsum.photos/330'
          className='rounded-full shadow-lg'
          alt=''
        />
      </div>
      <div className=' grid place-content-center'>
        <h1 className='text-indigo-600 text-5xl font-semibold'>
          {' '}
          {company?.name}
        </h1>
        <p className='text-4xl text-gray-500 my-5'>{company?.category}</p>
        <div className='flex  space-x-6'>
          <span> Start : {company?.start}</span>
          <span> End : {company?.end}</span>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const companies = getData();
  const ids = companies.map((company) => company.id);
  const paths = ids
    .map((id) => ({ params: { blogId: id.toString() } }))
    .slice(0, 3);
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const { blogId } = ctx.params;
  const companies = getData();
  const company = companies.find((company) => company.id === parseInt(blogId));
  if (!company.id) {
    return {
      redirect: {
        destination: '/blog',
      },
      // notFound: true,
    };
  }
  return {
    props: {
      company,
    },
    revalidate: 10,
  };
};
export default Details;
