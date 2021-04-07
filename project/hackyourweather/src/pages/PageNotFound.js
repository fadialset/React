import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section>
      <h2>Page Not Found</h2>
      <Link  to='/'>
        Back Home
      </Link>
    </section>
  );
};

export default PageNotFound;