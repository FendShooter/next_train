import Company from '../../components/company';
import Title from '../../components/title';
import { getData } from '../api/newsletter';

function Blog({ companies }) {
  return (
    <div>
      <Title classes='text-center text-6xl text-indigo-500 font-medium' />
      <p className='m-4 text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugiat
        ipsa nobis adipisci cupiditate nesciunt, nihil magnam, assumenda
        voluptatem rerum culpa, neque recusandae consequatur praesentium atque
        nisi consequuntur laboriosam porro.
      </p>

      <Title classes='text-center text-2xl text-green-500 font-medium' />
      <section className='grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5  max-w-[1400px] m-auto my-6'>
        {companies.map((company) => (
          <Company key={company.id} {...company} />
        ))}
      </section>
    </div>
  );
}

export default Blog;
export const getStaticProps = async () => {
  return {
    props: {
      companies: getData(),
    },
    revalidate: 10,
  };
};
