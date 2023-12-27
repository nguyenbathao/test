import { useState } from "react";
import "./App.css";
import TextComponent from "./components/Sidebar/Text";
import Text from "./components/Sidebar/Text/index2";
import InputForm from "./components/SignUpForm/Form";


function App() {
  // const [form, setForm] = useState({
  //   username: "",
  //   password: "",
  //   passwordconfirm: "",
  //   email: "",
  // });

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.id]: e.target.value });
  // };

  // const handleSignUp = () => {
  //   console.log(form);
  // };

  return (
    <>
      <div className="main">
        <div className="side-bar">
          <div className="topsidebar">
            <TextComponent text="Benefit of being a member" />
          </div>
          <div className="botsidebar" >
            <Text text="Find Something to watch on your subscribed streaming services" />
            <Text text="Log the movies and TV shows you have watched" />
            <Text text="Keep track of your favorite movies and TV shows and gets recommendations from them" />
            <Text text="Build and maintain a personal watchlist" />
            <Text text="Build custom mixed lists (movies and TV)" />
            <Text text="Take part in movie and TV discussions" />
            <Text text="Contribute to and improve the information in our database" />
          </div>
        </div>
        <div className="signupform">
          <h2>Sign Up for an account</h2>
          <p>Signing up for an account is free and easy. Fill out the form below to get started. Javascript is required to continue</p>
          <InputForm />
        </div>
      </div>
    </>
  );
}

export default App;
