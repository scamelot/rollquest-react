import logo from './logo.svg';
import './App.css';
import Character from './Character';

function App() {
  let characterList = []
  let characters = [1,2,3,4,5,6]

  characters.forEach(char => {
    characterList.push(<Character />)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="h-100">
        <div className="p-20 m-16 bg-green-100">
            <h1 className="text-6xl font-bold text-white">Roll Quest</h1>
        </div>
        <main>
      </main>
    </div>
    <section className="text-gray-600 body-font w-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Characters</h1>
        <p className="lg:w-max w-full leading-relaxed text-gray-500">Choose Your Hero</p>
      <section className="text-gray-600 body-font flex flex-wrap w-full">
        <div className="container px-5 py-24 mx-auto w-full flex justify-around ">
                  {characterList}
        </div>
        </section>
        </div>
      </div>
      </section>
      </header>
    </div>
  );
}

export default App;
