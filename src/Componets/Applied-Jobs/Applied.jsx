import { getShoppingCart } from "../../utilities/fakedb";
import Hero_Section from "../Hero_Section/Hero_Section";
import Applied_Job from "./Applied_Job/Applied_Job";
import { useLoaderData } from "react-router-dom";

const Applied = () => {
    const jobsData = useLoaderData(); 
    const getJobApplied = getShoppingCart();

    const findJob = [];
    for(const getIds in getJobApplied){
        const getJobData = jobsData.find(job => job.id == getIds);
        findJob.push(getJobData)
    }

    return (
        <div>
            <Hero_Section>Applied Jobs</Hero_Section>
            <div className="container mx-auto py-[100px]">
                <div className="pb-[32px] text-end">
                    <select className="outline-none bg-zinc-100 p-2 rounded-lg text-zinc-700 text-xl font-semibold font-['Manrope']"> 
                        <option selected>Filter By</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                    </select>
                </div>
                <div className="flex flex-col gap-[24px]">
                    {
                        findJob.map(job => <Applied_Job 
                            key={job.id}
                            job={job}
                        ></Applied_Job>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Applied;