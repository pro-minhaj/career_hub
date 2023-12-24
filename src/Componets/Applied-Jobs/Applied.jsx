import { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import Hero_Section from "../Hero_Section/Hero_Section";
import Applied_Job from "./Applied_Job/Applied_Job";

const Applied = () => {
    const [jobs, setJobs] = useState([]);
    const getJobApplied = getShoppingCart();

    useEffect(() => {
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);
    
    const getId = Object.values(getJobApplied);
    const findJob = [];
    if(!getId){
        for(const findId of getId){
            const getJobData = jobs.find(job => job.id === findId);
            findJob.push(getJobData)
        }
    }
    console.log(findJob);
    return (
        <div>
            <Hero_Section>Applied Jobs</Hero_Section>
            <div>
                <div>
                    <p>Filter By</p>
                </div>
                <div>
                    {
                        findJob.map(job => <Applied_Job key={job.id}></Applied_Job>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Applied;