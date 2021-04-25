import "./App.css";
import Profile from "./Profile/components/Profile";

const handleName = (e) => alert(e);
const info = {
  fullName: "Emna Rbii",
  bio: "I'm full stack js",
  profession: "fullstack developper",
};

function App() {
  return (
    <div className="App">
      <Profile info={info} handleName={handleName}>
        <img
          src="https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg"
          alt="react"
        />
      </Profile>
    </div>
  );
}

export default App;
