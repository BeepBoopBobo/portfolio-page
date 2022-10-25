import React, { useEffect, useRef, useState } from "react";
import './Homepage.css';
import dndOne from '../images/dnd-one.png';
import dndTwo from '../images/dnd-two.png';
import dndThree from '../images/dnd-three.png';
import lightsOne from '../images/lights-out-one.png';
import lightsTwo from '../images/lights-out-two.png';
import clovece from '../images/clovece-nezlob-se.png';
import chatauOne from '../images/chatau-one.png';
import chatauTwo from '../images/chatau-two.png';
import chatauThree from '../images/chatau-three.png';

import { SiAdobexd, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiTypescript, SiReact, SiHtml5, SiCss3, SiFirebase } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";


const Homepage = () => {
    const [displayedProject, setDisplayedProject] = useState(0);
    const [projectName, setProjectName] = useState('');
    const [projectPictures, setProjectPictures] = useState([dndOne, dndTwo, dndThree]);
    const [projectDesc, setProjectDesc] = useState('');
    const [projectTags, setprojectTags] = useState([]);
    const [colorSet, setColorSet] = useState([]);

    const [currentPicture, setCurrentPictre] = useState('');
    const modalDiv = useRef(null);
    const neon = {
        color: `${colorSet[3]}`,
        textShadow: `0px 0px 10px ${colorSet[2]}`
    }


    const handleSwitchProject = (value) => {
        if (displayedProject + value >= 0 && displayedProject + value <= 2) {
            setDisplayedProject(displayedProject + value);
        }
    }

    useEffect(() => {
        switch (displayedProject) {
            case 1:
                setColorSet(['#2C705E', '#F3EADA']);
                setProjectName('Chatau');
                setProjectPictures([chatauOne, chatauTwo, chatauThree]);
                setProjectDesc('My two friends and I decided to make a shared project. Basically its a web-page for listing and searching for cottages in the Czech republic and so far its just in the early stages of development... not much to show.');
                setprojectTags(['No links for now']);
                break;

            case 2:
                setColorSet(['#202020', '#4A4A4A', '#BD65FF', '#E4C2FF']);
                setProjectName('Minigames');
                setProjectPictures([lightsOne, clovece, lightsTwo])
                setProjectDesc('And here are some of my attempts at making games. "Clovece nezlob se" is much harder than I thought a lot of tweaking ahead.');
                setprojectTags([<a className="tag" href="https://github.com/BeepBoopBobo/clovece-nezlob-se/tree/master/src">Clovece nezlob se [code]</a>, <a className="tag" href="https://github.com/BeepBoopBobo/lights-out/tree/master/src">Lights Out [code]</a>]);
                break;

            case 0:
            default:
                setColorSet(['#FF6868', '#FFF5F5'])
                setProjectName('Dungeons and dragons chracters');
                setProjectPictures([dndOne, dndTwo, dndThree]);
                setProjectDesc('One of my bigger projects a web-app to create and store characters from Dungeons and dragons. I still have some work to do on this one like create a ton of icons and add some spells.');
                setprojectTags([<a className="tag" href="https://beepboopbobo.github.io/dungeons-and-dragons-characters/">DEMO</a>, <a className="tag" href="https://github.com/BeepBoopBobo/dungeons-and-dragons-characters/tree/master/src">CODE</a>]);
                break;
        }
    }, [displayedProject])

    const viewModal = (e) => {
        console.log(e.target.src);
        setCurrentPictre(e.target.src);
        modalDiv.current.className = 'modal visible';
    }

    const closeModal = () => {
        modalDiv.current.className = 'modal';
    }

    return <div id="page-bg"
        style={{ background: `linear-gradient(${colorSet[0]} , ${colorSet[1]}` }}>
        <div id="content">
            <div ref={modalDiv} className="modal">
                <button id="modal-button" style={{ backgroundColor: colorSet[1] }} onClick={() => closeModal()} >CLOSE</button>
                <img id='modal-image' alt='Zoomed in screenshot of a project' src={currentPicture} onClick={() => closeModal()} />
            </div>

            <div id="header">
                <div id="avatar-container" style={displayedProject === 2 ?
                    {
                        backgroundColor: 'transparent',
                        border: `5px solid ${colorSet[3]}`,
                        boxShadow: `inset 0px 0px 10px 5px ${colorSet[2]},0px 0px 10px 5px ${colorSet[2]}`
                    } :
                    { backgroundColor: colorSet[1] }}>
                    {displayedProject === 2 ?
                        <>
                            <img id='avatar-foreground' alt='A avatar of Tomas Marek' src={require('../images/selfportraitOutline.png')} />
                            <img id='avatar-background' alt='Avatars shadow' src={require('../images/selfportraitOutline.png')} />
                        </> :
                        <img id='avatar' alt='A avatar of Tomas Marek' src={require('../images/selfportraitOutline.png')} />}
                </div>
                <div id="main">
                    <h1 id='full-name' style={displayedProject === 2 ? neon : { color: colorSet[1] }}>Tomáš MAREK</h1>
                    <p id='bio' style={colorSet[2] === undefined ? { color: colorSet[1] } : { color: colorSet[2] }}> Hey, I am a front-end web developer and somewhat of a UI/UX designer.</p>
                    <div id="bio-tags" style={colorSet[2] === undefined ? { color: colorSet[1] } : { color: colorSet[2] }}>< SiReact />< SiFirebase />< FaJsSquare />< SiTypescript />< SiHtml5 /><SiCss3 /><SiAdobexd />< SiAdobeillustrator /><SiAdobephotoshop /><SiAdobepremierepro /></div>
                </div>
            </div>

            <div id="projects-container">
                <button id='previous-project' className={displayedProject > 0 ? "change-proj-buttons" : "change-proj-buttons hidden"} style={{ color: colorSet[0], backgroundColor: colorSet[1] }} onClick={() => { handleSwitchProject(-1) }}>{'<'} </button>
                <div id="projects">
                    <div id="gallery">

                        <div id="img-one">
                            <img className="project-image" alt='A screenshot of a project 1 of 3' id="first-picture" onClick={(e) => viewModal(e)} src={projectPictures[0]} />
                        </div>

                        <div id="img-two">
                            <img className="project-image" alt='A screenshot of a project 2 of 3' id="second-picture" onClick={(e) => viewModal(e)} src={projectPictures[1]} />
                        </div>

                        <div id="img-three">
                            <img className="project-image" alt='A screenshot of a project 3 of 3' id="third-picture" onClick={(e) => viewModal(e)} src={projectPictures[2]} />
                        </div>
                    </div>

                    <div id="about-projects">
                        <h2 style={displayedProject === 2 ? neon : { color: colorSet[1] }}>{projectName}</h2>
                        <div id="description">
                            <p style={colorSet[2] === undefined ? { color: colorSet[1] } : { color: colorSet[2] }}> {projectDesc}</p>
                        </div>
                        <div id="tags">

                            {projectTags.map(item => <button className="tag-button" style={colorSet[2] === undefined ? { backgroundColor: colorSet[1], color: colorSet[0] } : { backgroundColor: colorSet[2], color: colorSet[0] }}>{item}</button>)}
                        </div>
                    </div>
                </div>
                <button id='next-project' className={displayedProject < 2 ? "change-proj-buttons" : "change-proj-buttons hidden"} style={{ color: colorSet[0], backgroundColor: colorSet[1] }} onClick={() => { handleSwitchProject(1) }}>{'>'}</button>
            </div>
            <div id="bonus">
                <div id="bonus-content" style={displayedProject === 2 ? {} : { backgroundColor: colorSet[0] }}>
                    <h2 style={displayedProject === 2 ? neon : { color: colorSet[1] }}>A little bit more about me..</h2>
                    <p style={colorSet[2] === undefined ? { color: colorSet[1] } : { color: colorSet[2] }}> I like to draw, paint and overall do anything, where I can be a bit creative. I even started tattooing, but just for fun though. As you could have already guessed I like to play D&D, even as a DM. If I am not doing any of those things, plus programming, I usually play some videogames.</p>
                </div>
            </div>
        </div>
    </div >
}

export default Homepage;