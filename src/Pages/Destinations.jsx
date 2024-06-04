const Destinations = () => {
    return (
        <div className="my-10 mx-1">
            <h1 className="text-3xl lg:text-4xl font-bold">Trending Destinations</h1>
            <p className="text-sm lg:text-medium lg:mt-1">Most popular choices for travelers from Bangladesh</p>
            <div className="">
                <div className="grid grid-cols-2 gap-1 lg:gap-2 mt-2 mb-1 lg:mb-2">
                    <div className="relative group">
                        <img className="rounded-lg w-full h-[25vh] lg:h-[50vh] object-cover" src="https://i.ibb.co/pv3chRF/Neeulm-Valley-AJK-Arang-Kel.jpg" alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg">Kashmir, India </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <img className="rounded-lg w-full h-[25vh] lg:h-[50vh] object-cover" src="https://i.ibb.co/fCCbghS/8d4fe0d8-city-28030-164fcc85915.jpg" alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg">Dhaka City</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 lg:gap-2">
                    <div className="relative group">
                        <img className="rounded-lg w-full h-[20vh] lg:h-[40vh] object-cover" src="https://i.ibb.co/2S7qNMh/cq5dam-web-1024-576.jpg" alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg">Ladakh, India</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <img className="rounded-lg w-full h-[20vh] lg:h-[40vh] object-cover" src="https://i.ibb.co/PxRWKBy/Kathmandu-Tour-Package.jpg" alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg">Kathmandu</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <img className="rounded-lg w-full h-[20vh] lg:h-[40vh] object-cover" src="https://i.ibb.co/0sbKcgQ/Malaysia-Kuala-Lumpur.jpg" alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg">Kuala Lumpur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
