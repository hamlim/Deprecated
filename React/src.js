import React from 'react';
import ReactDOM from 'react-dom';
var css = require('./main.css');

/*

Blink --
Marquee --
strike --
big --
center --
bgsound --

*/

const DepStrike = (props) => ( <del>{props.innerText}</del> );
const DepBlink = (props) => ( <span className="dep-blink">{props.innerText}</span> );
const DepMarquee = (props) => ( <p className="dep-marquee-wrapper"><span className="dep-marquee">{props.innerText}</span></p> );
const DepBig = (props) => ( <h1 className="dep-big">{props.innerText}</h1> );
const DepCenter = (props) => ( <div className="dep-center-wrapper">{props.children || props.innerText}</div> );
const DepBgsound = (props) => ( <audio className="dep-audio" src={props.source} autoplay loop></audio> );


ReactDOM.render(<DepStrike innerText="I am a &lt;strike&gt element!" />, document.getElementById('react-strike'));
ReactDOM.render(<DepBlink innerText="I am a &lt;Blink&gt element!" />, document.getElementById('react-blink'));
ReactDOM.render(<DepMarquee innerText="I am a &lt;marquee&gt element!" />, document.getElementById('react-marquee'));
ReactDOM.render(<DepBig innerText="I am a &lt;big&gt element!" />, document.getElementById('react-big'));
ReactDOM.render(<DepCenter innerText="I am a &lt;Center&gt element!" />, document.getElementById('react-center'));
ReactDOM.render(<DepBgsound source="./assets/sound.mp3" />, document.getElementById('react-bgsound'));
