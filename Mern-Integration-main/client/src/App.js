import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import FilterProfile from "./components/FilterProfile";
import UserAccount from "./components/UserAccount";
import Updates from "./components/Updates";
import UpdateView from './components/UpdateView';
import UpdatesForMe from './components/UpdatesForMe';
import MyUpdates from './components/MyUpdates';
import MyNetwork from "./components/MyNetwork";


import ProfileForm from "./components/ProfileForm";
import ProfileView from "./components/ProfileView";

import Asp from "./components/Asp"
import Webs from "./components/ServicesPages/webs"
import Apps from "./components/ServicesPages/apps"
import Advs from "./components/ServicesPages/advs"
import Sms from "./components/ServicesPages/sms"
import Dabis from "./components/ServicesPages/dabis"
import Sds from "./components/ServicesPages/sds"
import Ecs from "./components/ServicesPages/ecs"
import Gds from "./components/ServicesPages/gds"
import Cs from "./components/ServicesPages/cs"

import Signup from "./components/Signup";
import Login from "./components/Login";

import About from "./components/WebsitePages/about"
import Services from "./components/WebsitePages/services"
import Team from "./components/WebsitePages/team"

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/home" exact element={<Home/>} />}
			<Route path="/completecat/:category" element={<FilterProfile />} />

			
			<Route path="/useraccount" exact element={<UserAccount />} />

			<Route path="/updates" exact element={<Updates />} />
			<Route path="/updateview/:id" exact element={<UpdateView />} />
			<Route path="/updateforme" exact element={<UpdatesForMe/>} />
			<Route path="/myupdates" exact element={<MyUpdates/>} />

			<Route path="/mynetwork" exact element={<MyNetwork />} />

			<Route path="/profileform" exact element={<ProfileForm/>} />
			<Route path="/profileview/:id" exact element={<ProfileView/>} />


            <Route path="/asp" exact element={<Asp/>} />
			<Route path="/webs" exact element={<Webs/>} />
			<Route path="/apps" exact element={<Apps/>} />
			<Route path="/advs" exact element={<Advs/>} />
			<Route path="/sms" exact element={<Sms/>} />
			<Route path="/dabis" exact element={<Dabis/>} />
			<Route path="/sds" exact element={<Sds/>} />
			<Route path="/ecs" exact element={<Ecs/>} />
			<Route path="/gds" exact element={<Gds/>} />
			<Route path="/cs" exact element={<Cs/>} />


			<Route path="/signup" exact element={<Signup />} />
			<Route path="/" exact element={<Login />} />

			<Route path="/about" exact element={<About/>} />
			<Route path="/services" exact element={<Services/>} />
			<Route path="/team" exact element={<Team/>} />
		
			
		</Routes>
	);
};

export default App;

