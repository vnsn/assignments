// for the component files, don't need the DOM
import React from "react";

// import other components
import Header from "./Header/header.js";
import Banner from "./Banner/banner.js";
import Info from "./Info/info.js";
import Content from "./Content/content.js";
import Contact from "./Contact/contact.js";
import Social from "./Social/social.js";
import Footer from "./Footer/footer.js";

// use JSX to define components
function App() {
    return (
        <div className="wrapper">
            <Header></Header>
            <Banner></Banner>
            <Info></Info>
            <Content></Content>
            <Contact></Contact>
            <Social></Social>
            <Footer></Footer>
        </div>
    )
}

export default App;

/* 
Use the javascript style attribute names, like className, etc.

Only put class names on html elements, not react components. 

style.css IMPORT goes in the SRC index.js!!

At first, style using CSS.
Don't do inline styling, unless it's dynamic, like strikethrough text when click the completed box.

You CAN make a separate CSS file for each component, but not recommended. Just make one CSS file.

Babel uses Web pack to combine all the files into one.

*/
