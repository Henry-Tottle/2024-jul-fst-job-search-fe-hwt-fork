import 'bootstrap'
import './App.css'
import JobSearch from "./components/JobSearch/index.jsx";
import {useState} from "react";
import JobListings from "./components/JobListings/index.jsx";

function App() {
    const [query, setQuery] = useState('http://0.0.0.0:8080/jobs/recent')


    const [header, setHeader] = useState('Most recent jobs')
    const [viewButton, setViewButton] = useState('View all jobs ->')

    return (

        <>
            <JobSearch setQuery={setQuery} setHeader={setHeader} setViewButton={setViewButton}/>
            <JobListings query={query} header={header} viewButton={viewButton}/>

        </>
    )
}

export default App
