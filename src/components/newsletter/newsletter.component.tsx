const NewsLetter = () => {
    const InputString = "<input>";

    return (
        <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div className="max-w-xl text-center mx-auto">
            <div className="mb-5">
              <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-white">Finally, the<span className='mx-3 font-mono font-medium text-green-400'>{InputString}</span>at the bottom of every single landing page!</h2>
            </div>
        
            <form>
              <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">Search</label>
                  <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-900 dark:border-gray-700 text-gray-400 dark:focus:ring-gray-600" placeholder="Enter your email"/>
                </div>
                <a className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  Subscribe
                </a>
              </div>
            </form>
          </div>
        </div>
       
    );
};

export default NewsLetter;