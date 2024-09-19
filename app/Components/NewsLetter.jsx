import React from 'react'

const NewsLetter = () => {
    return (
        <div className="">
            <aside className="p-1 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700" aria-label="Subscribe to the Flowbite newsletter">
                <h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">Get more updates...</h3>
                <form
                    className="seva-form formkit-form"
                    min-width="400 500 600 700 800">
                            <input type="text" className='border-2 border-purple-600 h-[40px] rounded-[10px] p-1' placeholder='Your Email ID...' />
                            <button data-element="submit" className="mt-5 formkit-submit ml-2">

                                <span className=" px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</span>
                            </button>
                       
                    
                </form>
            </aside>
        </div>
    )
}

export default NewsLetter
