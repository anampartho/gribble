import Navbar from './components/navbar';
import Filters from './components/filters';
import Medias from './components/medias';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Filters />
      <Medias />
    </div>
  );
}

export default App;
