import React from "react";

import Component from "./Component/Component";

function App() {

    const blogPost1 = {
        backgroundColor: "hotpink",
        title: "I am called blogPost1",
        subtitle: "I am too short to need a sub-title",
        info: "I am the info in the hotpink p-tag."
    }

    const blogPost2 = {
        backgroundColor: "crimson",
        title: "I am called blogPost2",
        subtitle: "I am too short to need a sub-title",
        info: "I am the info in the crimson p-tag.",
        postClass: "fat"
    }

    const blogPost3 = {
        backgroundColor: "palegoldenrod",
        title: "I am called blogPost3",
        subtitle: "I am too short to need a sub-title",
        info: "I am the info in the palegoldenrod p-tag."
    }

    const blogPost4 = {
        backgroundColor: "lime",
        title: "I am called blogPost4",
        subtitle: "I am too short to need a sub-title",
        info: "I am the info in the lime p-tag."
    }

    const blogPost5 = {
        backgroundColor: "aquamarine",
        title: "I am called blogPost5",
        subtitle: "I am too short to need a sub-title",
        info: "I am the info in the aquamarine p-tag.",
        postClass: "normal"
    }

    const blogPost6 = {
        backgroundColor: "skyblue",
        title: "I am called blogPost6",
        subtitle: "I am too short to need a sub-title",
        info: "I am the info in the skyblue p-tag."
    }

    const blogPost7 = {
        backgroundColor: "tan",
        title: "I am called blogPost7",
        subtitle: "I am too short to need a sub-title",
        info: "I am the info in the tan p-tag.",
        postClass: "ugly"
    }

    const blogPost8 = {
        backgroundColor: "coral",
        title: "I am called blogPost8",
        subtitle: "I am too short to need a sub-title",
        info: "I am the info in the coral p-tag."
    }

    const blogPostX = {
        backgroundColor: "purple",
        title: "I am called blogPostX",
        subtitle: "I am too short to need a sub-title",
        info: "I am the info in the purple p-tag."
    }

    return (
        <div>
            <Component {...blogPost1}></Component>
            <Component {...blogPost2}></Component>
            <Component {...blogPost3}></Component>
            <Component {...blogPost4}></Component>
            <Component {...blogPost5}></Component>
            <Component {...blogPost6}></Component>
            <Component {...blogPost7}></Component>
            <Component {...blogPost8}></Component>

            <Component backgroundColor="teal" title="I am the teal title - #9" subtitle="I am the teal subtitle" info="I am blue info. I am the 9th component." postClass="fat"></Component>

            <Component {...blogPostX}></Component>
        </div>
    )
}

export default App;