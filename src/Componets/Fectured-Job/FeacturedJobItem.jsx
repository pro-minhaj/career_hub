
const FeacturedJobItem = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default FeacturedJobItem;