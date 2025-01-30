import Header from '../components/Header/Header';
import { formatText } from '../helpers/formatText';
import { fetchData } from '../api/fetchData';

function Home() {
  const homeTitle = formatText("And I'm the Home page!");
  fetchData();

  return (
    <>
      <Header />
      <h1>{homeTitle}</h1>
    </>
  );
}

export default Home;
