import { useEffect, useState } from "react";
import FeacturedJobItem from "../Fectured-Job/FeacturedJobItem";

const Featured = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    return (
        <div className="container mx-auto px-3 md:px-0 pb-20">
            <h1 className="text-center text-zinc-800 text-3xl md:text-5xl font-semibold font-['Manrope'] mb-4">Featured Jobs</h1>
            <p className="text-center text-neutral-500 text-base font-medium font-['Manrope'] leading-relaxed">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 gap-[24px] py-10">
                {
                    jobs.map(job => <FeacturedJobItem 
                        key={job.id} job={job}
                    ></FeacturedJobItem>)
                }
            </div>
            <div className="text-center">
                <button className="px-6 py-4 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-xl font-extrabold font-['Manrope']">See All Jobs</button>
            </div>
        </div>
    );
};

export default Featured;