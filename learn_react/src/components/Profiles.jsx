import { useState } from "react";
import Profile from "./Profile";

function Profiles() {
    const [selectedProfileName, setSelectedProfileName] = useState('Welcome to Skillup Labs');
    
    function selectProfile(name) {
        console.log(name);
        setSelectedProfileName(name);
    }
    return (
        <section className="shadow p-8 bg-white flex flex-col gap-2">
            <div className="flex gap-2">
                <Profile url="https://i.imgur.com/1bX5QH6s.jpg" selectProfile={selectProfile} color="red" name="Bandish" />
                <Profile url="https://i.imgur.com/OKS67lhs.jpg" selectProfile={selectProfile} color="green" name="Sameer"/>
                <Profile url="https://i.imgur.com/1bX5QH6s.jpg" selectProfile={selectProfile} color="blue" name="Sangita" />
                <Profile url="https://i.imgur.com/7vQD0fPs.jpg"selectProfile={selectProfile} color="purple" name="Yum"/>
            </div>
            <h3 className="text-xl">{selectedProfileName}</h3>
        </section>
    )
}
export default Profiles;