import { useState } from "react";
import React from "../components/vote.css";


const Vote = () => {

    const [count, setcount] = useState(0);
    const [count1, setcount1] = useState(0);
    const [count2, setcount2] = useState(0);
    const [count3, setcount3] = useState(0);
    const [count4, setcount4] = useState(0);
    const [count5, setcount5] = useState(0);
    const[display,setdisplay]=useState('none')
    const [chaap, setchaap]=useState('');
    const[img,setimg]=useState('')


    const [currentColorRow1, setCurrentColorRow1] = useState('red');
    const [currentColorRow2, setCurrentColorRow2] = useState('red');
    const [currentColorRow3, setCurrentColorRow3] = useState('red');
    const [currentColorRow4, setCurrentColorRow4] = useState('red');
    const [currentColorRow5, setCurrentColorRow5] = useState('red');

    const [name, setname] = useState('result panding')
    const changeColor = (row) => {
        if (row === 1) {
            setCurrentColorRow1('green');
            setdisplay('block')
            setcount1(count1 + 1);
            setchaap('BJP')
            setimg('img/kamal.jpg')
        }
        else if (row === 2) {
            setCurrentColorRow2('green');
            setdisplay('block')
            setcount2(count2 + 1);
            setchaap('INC')
            setimg('img/hath.jfif')
        }
        else if (row === 3) {
            setCurrentColorRow3('green');
            setdisplay('block')
            setcount3(count3 + 1);
            setchaap('RJD')
            setimg('img/lalten.jpg')
        }
        else if (row === 4) {
            setCurrentColorRow4('green');
            setdisplay('block')
            setcount4(count4 + 1);
            setchaap('JDU')
            setimg('img/teer.webp')
        }
        else if (row === 5) {
            setCurrentColorRow5('green');
            setdisplay('block')
            setcount5(count5 + 1);
            setchaap('AIMIM')
            setimg('img/patang.png')
        }

        setTimeout(() => {
            setCurrentColorRow1('red');
            setCurrentColorRow2('red');
            setCurrentColorRow3('red');
            setCurrentColorRow4('red');
            setCurrentColorRow5('red');
            setdisplay('none')
            const audio = new Audio('img/beep-01a.mp3');
            audio.play();
        }, 2000);
        // Play audio

    };

    const inc = (() => {
        setcount(count + 1);
    })

    const [isVisible, setIsVisible] = useState(false);


    const toggleVisibility = () => {
        if (count1 > count2 && count1 > count3 && count1 > count4 && count1 > count5) {
            setname('BJP');
        }
        else if (count2 > count3 && count2 > count4 && count2 > count5) {
            setname('INC');
        }
        else if (count3 > count4 && count3 > count5) {
            setname('RJD');
        }
        else if (count4 > count5) {
            setname('JDU');
        }
        else if (count5 > count2 && count5 > count3 && count5 > count4 && count5 > count1) {
            setname('AIMIM');
        }
        setIsVisible(!isVisible);
    };



    return (
        <>
            <div className="nav">
                <a href="#follow"><img className="logo" src="img/logo.jfif" alt="" /> </a>
                <ul>
                    <li><a href="#evm">Home</a></li>
                    <li><a href="#evm">Vote</a></li>
                    <li><a href="#result">Result</a></li>
                    <li><a href="https://github.com/wasimkhanktr/evm-test-machine">Source Code</a></li>
                    <li><a href="#follow">Contact Us</a></li></ul>
            </div>
            <div id="evm" className="evm">


                <table border={2}><ol>
                    <tr>
                        <td><h1>1.</h1></td>
                        <td><h1>NDA</h1></td>
                        <td><img src="img/kamal.jpg" alt="kamal" />  </td>
                        <td><div className="circle" style={{ backgroundColor: currentColorRow1 }}></div></td>
                        <td><button onClick={() => { inc(); changeColor(1); }}></button></td>
                    </tr>
                    <tr>
                        <td><h1>2.</h1></td>
                        <td><h1>INC</h1></td>
                        <td><img src="img/hath.jfif" alt="hath" />  </td>
                        <td><div className="circle" style={{ backgroundColor: currentColorRow2 }}></div></td>
                        <td><button onClick={() => { inc(); changeColor(2); }}></button></td>
                    </tr>
                    <tr>
                        <td><h1>3.</h1></td>
                        <td><h1>RJD</h1></td>
                        <td><img src="img/lalten.jpg" alt="lalten" />  </td>
                        <td><div className="circle" style={{ backgroundColor: currentColorRow3 }}></div></td>
                        <td><button onClick={() => { inc(); changeColor(3); }}></button></td>
                    </tr>
                    <tr>
                        <td><h1>4.</h1></td>
                        <td><h1>JDU</h1></td>
                        <td><img src="img/teer.webp" alt="teer" />  </td>
                        <td><div className="circle" style={{ backgroundColor: currentColorRow4 }}></div></td>
                        <td><button onClick={() => { inc(); changeColor(4); }}></button></td>
                    </tr>
                    <tr>
                        <td><h1>5.</h1></td>
                        <td><h1>AIMIM</h1></td>
                        <td><img src="img/patang.png" alt="patang" />  </td>
                        <td><div className="circle" style={{ backgroundColor: currentColorRow5 }}></div></td>
                        <td><button onClick={() => { inc(); changeColor(5); }}></button></td>
                    </tr>
                    <tr>
                        <td><h1>6.</h1></td>
                        <td></td>
                        <td><img src="" alt="" />  </td>
                        <td><div className="circle" ></div></td>
                        <td><button ></button></td>
                    </tr>
                    <tr>
                        <td><h1>7.</h1></td>
                        <td></td>
                        <td><img src="" alt="" />  </td>
                        <td><div className="circle" ></div></td>
                        <td><button ></button></td>
                    </tr>
                    <tr>
                        <td><h1>8.</h1></td>
                        <td></td>
                        <td><img src="" alt="" />  </td>
                        <td><div className="circle" ></div></td>
                        <td><button ></button></td>
                    </tr>
                    <tr>
                        <td><h1>9.</h1></td>
                        <td></td>
                        <td><img src="" alt="" />  </td>
                        <td><div className="circle" ></div></td>
                        <td><button ></button></td>
                    </tr>
                    <tr>
                        <td><h1>10.</h1></td>
                        <td></td>
                        <td><img src="" alt="" />  </td>
                        <td><div className="circle" ></div></td>
                        <td><button ></button></td>
                    </tr>
                </ol></table>
                <br /><br /><br /><br /><br />

                <div className="chaap">
                    <marquee   className="chap" behavior="scroll" direction="down">

                        <div style={{display: display }}>
                         <h3>{chaap}</h3>
                         <img src={img} alt="" />
                        </div>

                    </marquee>
                </div>





            </div>
            <div>
                <button id="result" className="result" onClick={toggleVisibility}>
                    {isVisible ? 'Hide Result' : 'Show Result'}
                </button>
                {isVisible && (
                    <div>
                        <h1>winner is : {name}</h1>
                        <h1>BJP = {count1}</h1>
                        <h1>INC = {count2}</h1>
                        <h1>RJD = {count3}</h1>
                        <h1>JDU = {count4}</h1>
                        <h1>AIMIM = {count5}</h1>
                        <h1>Total vote = {count}</h1>
                    </div>
                )}
                <div className="follow" id="follow">
                    <h1>contact us</h1>

                    <div className="name">
                        <img className="profile" src="img/logo.jfif" alt="" />
                        <h3>wasimkhanktr <img src="img/verify.png" alt="" /></h3>
                        <h3>Md Wasim Akram</h3>
                    </div>
                    <ul>
                        <li><a href="https://www.facebook.com/wasimkhanktr1/"><img src="img/facebook.png" alt="" /></a></li>
                        <li><a href="https://www.instagram.com/wasimkhanktr/?hl=en"><img src="img/instagram.png" alt="" /></a></li>
                        <li><a href="https://www.linkedin.com/in/md-wasim-akram-09641516a/"><img src="img/social.png" alt="" /></a></li>
                        <li><a href="https://x.com/wasimkhanktr1?mx=2"><img src="img/twitter.png" alt="" /></a></li>
                        <li><a href="https://wa.me/qr/RAZOF3CUH76CI1"><img src="img/whatsapp.png" alt="" /></a></li>
                        <li><a href="https://github.com/wasimkhanktr"><img src="img/github.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="copy"><p>Copyright © 2024 wasimkhanktr ®</p></div>
        </>
    );
}

export default Vote;
