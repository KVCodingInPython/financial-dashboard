import Sidebar from "../Components/Sidebar.jsx";
export default function Dashboard ({Name}) {
    return(
        <>
        <h1> Welcome, {Name} </h1>
        <div className="dashboard-content">
            <Sidebar/>
        </div>
        </>





    );}
   