import React, { useEffect, useState } from 'react';
import ToysCard from '../../Pages/Home/ToysCard/ToysCard';

const Toys = () => {
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState("barbie");
    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setToys(result);
            });

    }, [activeTab]);
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (

        <div>
            <h2 className='text-center text-2xl text-teal-500 font-bold m-4'>Dolls Categorys </h2>
            <div className=' flex justify-center m-4'>

                <div className="tabs tabs-boxed">
                    <div onClick={() => handleTabClick("barbie")}
                        className={`tab barbie ${activeTab == "barbie" ? "bg-teal-600 text-white" : ""}`}>
                        Barbie
                    </div>
                    <div onClick={() => handleTabClick("american girl")}
                        className={`tab american girl ${activeTab == "american girl" ? "bg-teal-600 text-white" : ""}`}>

                        American girl
                    </div>
                    <div onClick={() => handleTabClick("baby dolls")}
                        className={`tab american girl ${activeTab == "baby dolls" ? "bg-teal-600 text-white" : ""}`}>
                        Baby Dolls

                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    toys?.map(toy =>
                        <ToysCard
                            key={toy._id}
                            toy={toy}>

                        </ToysCard>)
                }
            </div>
        </div>
    );
};

export default Toys;