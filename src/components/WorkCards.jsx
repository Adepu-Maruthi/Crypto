import React from 'react'

const WorkCards = () => {
    return (
        <div>

            <div className="container overflow-hidden text-center mb-5">
                <div className="row gx-5">
                    <div className="col my-5">
                        <div className="p-3 text-white workimage"><img className='w-75 rounded' src="/src/assets/bg9.png" alt="" /></div>
                    </div>
                    <div className="col workcard ">
                        <div className="p-4 my-2 text-white worktext textbox">
                            <h4 className='text-danger'>How It Works</h4>
                            <h1 className='text-white text-start'>Viewing Long-Term And Short-Term Forcast</h1>
                            <br />
                            <p className='text-white text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rerum soluta deleniti voluptate nemo iste. Laborum quae recusandae provident incidunt officia porro perferendis sit adipisci, soluta ad, totam ab id.</p>
                            <button className='btn button text-white border-white ms-auto mb-0'>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkCards
