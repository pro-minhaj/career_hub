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
        <div className="container mx-auto px-3 md:px-0">
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job => <FeacturedJobItem key={job.id} job={job}></FeacturedJobItem>)
                }
            </div>
        </div>
    );
};

export default Featured;