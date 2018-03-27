import React from "react";

function Component(props) {

    const { backgroundColor, title, subtitle, info, postClass } = props;

    const divStyle = {
        backgroundColor
    }

    return (
        <div style={divStyle}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p className={postClass}>{info} I will have a box around me if there is a class on me.</p>
        </div>
    )
}

export default Component;

/*
For div style, these both work.
<div style={{backgroundColor}}>
<div style={divStyle}>

But putting style inline is awful.

if use <Component data={blogPostX}></Component> for calling the component, 
then need to refer to props.data on this page. 

const { backgroundColor, title, subtitle, info, postClass } = props.data;

If don't deconstruct the props.data object, would need to refer to the below variables
with props.data.title, props.data.subtitle, etc.

    <div style={divStyle}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{info}</p>
            <div className={postClass}>
                <p>I am a p-tag that will have a box around me if there is a class on this div.</p>
            </div>
    </div>


Also, if we do the data={blogPostX} way of calling the component, this will NOT work:
<Component backgroundColor="teal" title="I am the teal title - #10" subtitle="I am the teal subtitle" info="I am blue info. I am the 10th component." postClass="ugly"></Component> 

*/