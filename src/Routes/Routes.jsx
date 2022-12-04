import {Overview} from "../Pages/Overview/Overview"
import {Repos} from "../Pages/Repos/Repos"
import { Projects } from "../Pages/Projects/Projects";
import { Packages } from "../Pages/Packages/Packages";
import { Stars } from "../Pages/Stars/Stars";
import {Followers} from "../Pages/Followers/Followers"
import {Following} from "../Pages/Following/Following"

import { Routes, Route } from "react-router-dom";

export const RoutesWrapper = () => {
    return(
        <Routes>
            <Route path="/overview" element={<Overview/>}/>
            <Route path="/repositories" element={<Repos/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/packages" element={<Packages/>}/>
            <Route path="/stars" element={<Stars/>}/>
            <Route path="/followers" element={<Followers/>}/>
            <Route path="/following" element={<Following/>}/>
        </Routes>
    )
}