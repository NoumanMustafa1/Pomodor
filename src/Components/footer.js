import buyMeCoffePNG from ".././static/images/buymecoffee.png";
import githubPNG from "../static/images/svgexport-13.svg";
import twitterPNG from ".././static/images/svgexport-12.svg";

const DefaultFooter =()=>{

    return (
<div className="bottomfooter">
            <p className="FooterPara">Made with love by Nouman Mustafa</p>
    <div className="Coffeebanner">
        <img src={buyMeCoffePNG} alt="Buy me Tea not Coffee please"/>
    </div>
    <div className="FooterImages">
             <img src={twitterPNG} alt="https://techcrunch.com/2009/08/17/why-i-dont-use-twitter/"/>
            <img src={githubPNG} alt="https://github.com/NoumanMustafa6/go"/>
    </div>

</div>)
};
export default DefaultFooter;