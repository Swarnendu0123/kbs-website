const EventHero = () => {
    return (
        <div class="relative overflow-hidden pt-20 before:absolute before:top-0 before:start-1/2 
        before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 
        before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]" >
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8  sm:pt-24 sm:pb-10">
                <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                    <div class="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                        <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                            <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                            <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                        </svg>
                    </div>

                    <div class="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                        <svg class="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="text-center">
                    <h1 class="text-4xl sm:text-6xl font-bold text-white">
                        Upcoming & Past Events
                    </h1>

                    <p class="mt-3 text-gray-400">
                        Join us on a journey of discovery and collaboration at the forefront of web3 technology.
                    </p>
                </div>
            </div>

          
            <div class="max-w-6xl px-4 sm:px-6 lg:px-8  mx-auto sm:pb-10 mb-10">
                <div class="max-w-xl text-center mx-auto">
                    <div class="mb-5">
                        <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-white">Don't want to miss the next event? <br />
                        Don't worry we will Email you.</h2>
                    </div>

                    <form>
                        <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                            <div class="w-full">
                                <label for="hero-input" class="sr-only">Search</label>
                                <input type="email" id="hero-input" name="hero-input" class="py-3 px-4 block w-full  rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600" placeholder="Enter your email"/>
                            </div>
                            <a class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                Regester
                            </a>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default EventHero;