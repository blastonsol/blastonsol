import logo from './assets/logo.png';
import TG from './assets/TG.svg'
import TW from './assets/TW.svg'
import about1 from './assets/about1.png'
import about2 from './assets/about2.png'
import about3 from './assets/about3.png'
import divider from './assets/divider.png'
import ad1 from './assets/ad1.png'
import ad2 from './assets/ad2.png'
import ad3 from './assets/ad3.png'
import './App.css';

function App() {

  const ticker = "$BLAST";

  return (
    <div className="App">
        <div className="section1">
        <div className="layout">
          <div className="logoBlock">
            <img alt="logo" className="logo" src={logo}/>
          </div>
          <div className="headingBlock">
              <h2 className="yellowHeading">MAIN LAUNCH</h2>
              <h1 className="heading">FEBRUARY 29</h1>
              <button className="button">BUY {ticker}</button>
            <div className="socialBlock">
              <a href="https://t.me/BlastSol" rel="noopener noreferrer" target="_blank"><img alt="TG" className="social" src={TG} /></a>
              <a href="https://twitter.com/Blast_L2" rel="noopener noreferrer" target="_blank"><img alt="TW" className="social" src={TW} /></a>
            </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="layout">
            <div class="big">
            <div className="items">
              <div className="item">
                <div className="numberCircle">
                  <p className="number">1</p>
                </div>
                <p className="description">
                  GET IN FRONT OF 165K <br/>
                  USERS & $2.1B TVL
                </p>
                <img alt="about1" className="itemImg" src={about1} />
              </div>
              <div className="item">
                <div className="numberCircle">
                  <p className="number">2</p>
                </div>
                <p className="description">
                  CONNECT WITH <br/> INVESTORS
                </p>
                <img alt="about1" className="itemImg" src={about2} />
              </div>
              <div className="item">
                <div className="numberCircle">
                  <p className="number">3</p>
                </div>
                <p className="description">
                  EARN THE BLAST <br/> AIRDROP
                </p>
                <img alt="about1" className="itemImg" src={about3} />
              </div>
            </div>
            <img alt="divider" className="divider" src={divider}/>
            <h3 className="heading2">Earn the Blast Airdrop</h3>
            <p className="description2">The LARGEST individual allocation of the Blast Airdrop to date will be distributed to winning teams. Use the Blast Airdrop to incentivize growth for your dapp on the Blast Mainnet and gain an edge over competitors.</p>
            <div className="airdropImgBlock">
              <img alt="1" className="Img1" src={ad1}/>
              <img alt="2" className="Img2" src={ad2}/>
              <img alt="3" className="Img3" src={ad3}/>
            </div>
            <img alt="divider" className="divider2" src={divider}/>
            </div>
          </div>
        </div>
        <div className="section3">
          <p></p>
        </div>
        <div className="section4">
            <h4 className="smallHeading">ENTER THE COMMUNITY</h4>
            <button className="button">JOIN GROUP</button>
            <div className="socialBlock2">
                <a href="https://t.me/BlastSol" rel="noopener noreferrer" target="_blank"><img alt="TG" className="social" src={TG} /></a>
                <a href="https://twitter.com/Blast_L2" rel="noopener noreferrer" target="_blank"><img alt="TW" className="social" src={TW} /></a>
            </div>
            <p className="reserved">All right reserved BLAST 2024.</p>
        </div>
      </div>
  );
}

export default App;
