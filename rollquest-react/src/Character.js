import './App.css';

function Character() {
  return (
    <div className="Character" style={{width: 900}}>
        <div className="border-white border-2 m-10 p-20">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24" data-darkreader-inline-stroke="">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>

          <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">Lufira Mugwort</h2>
          <h3 className='inline'>HP:  </h3><span className="inline">35</span>
          <h3 className='inline'>AC:  </h3><span className="inline">16</span>
    </div>
    </div>
  );
}

export default Character;
