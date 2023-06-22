import ImgBackground from '../assets/2111.w026.n002.1053B.p1.1053.jpg'
import Wafe from '../assets/wave (1).png'
import CardVenue from '../components/CardVenue'
import Layout from '../components/Layout'

const LandingPage = () => {
    return (
        <div>
            <Layout
                chose='layout'
            >
                <div className="relative w-screen h-screen">
                    <img src={ImgBackground} className="transition duration-500 ease-in-out hover:scale-110  absolute inset-0 object-cover object-center w-full h-full" alt="" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex justify-center items-center w-full">
                        <div className='w-1/2 flex justify-center items-center'>
                            <div>
                                <div>
                                    <h1 className="text-4xl font-bold text-white z-20">"Lorem ipsum ini tagline website"</h1>
                                </div>
                                <div className='w-full h-16 bg-gray-100 mt-5 rounded-xl flex justify-between items-center grow p-5'>
                                    <p>Category</p>
                                    <p>Place</p>
                                    <p>Rating</p>
                                    <p>Price</p>
                                    <p>Search</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='absolute inset-x-0 bottom-0 transition duration-500 ease-in-out hover:scale-110' src={Wafe} alt="" />

                </div>
                <div className='w-screen min-h-screen'>
                    <div className='w-full flex justify-center items-center'>
                      <p className='text-3xl font-bold pr-4 mt-5'>Best Over</p>
                    
                    </div>
                    <div className='p-10 flex gap-5 justify-center flex-wrap'>
                        <CardVenue/>
                        <CardVenue/>
                        <CardVenue/>
                        <CardVenue/>
                        <CardVenue/>
                        <CardVenue/>
                        <CardVenue/>
                    </div>

                </div>

            </Layout>
        </div>
    )
}

export default LandingPage