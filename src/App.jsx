import Navbar from './components/Navbar.jsx';
import ThreadList from './components/ThreadsList.jsx';

function App() {
  return (
    <div className="bg-[#0b1326] min-h-screen text-[#cbd5e1] antialiased flex flex-col">
      <Navbar />

      <main className="w-full pt-20 pb-12 bg-[#0b1326] min-h-screen flex-1">
        <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-8 py-6">
          <ThreadList />
        </div>
      </main>
    </div>
  );
}

export default App;