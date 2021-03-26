import Header from "./Blocks/Header";
import Main from "./Blocks/Main";
import SignInScreen from "./Screens/SignInScreen";
import Footer from "./Blocks/Footer";
import { useState } from "react";

import React from 'react';

export const Core = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      {isSignedIn ? <Core /> : <SignInScreen setIsSignedIn={setIsSignedIn} />}
    </div>
  );
}

export default App;
