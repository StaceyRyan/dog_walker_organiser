import React from 'react';
import './WaggyTail.css';
import { TimelineLite, CSSPlugin, TweenLite, TweenMax, SteppedEase } from 'gsap/all';
import Button from '@material-ui/core/Button';

class WaggyTail extends React.Component {
    constructor(props) {
        super(props);
        this.dogContainer = null;
        this.dogElement = null;
        this.dogTween = new TimelineLite({ paused: false })
        this.dogLegUp = null;
        this.dogLegDown = null;
    }

    componentDidMount() {
        //Need the TweenLite to provide access to built-in GSAP stuff like reverse, restart etc
        //TweenLite SteppedEase config number = how many steps to take
        //TweenLite x value is finish position on X axis
        // Integer in front of {} is the number of seconds the tween takes
        this.dogTween
        .to(this.dogContainer, 3, { x: 25 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 3, { x: 50 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 3, { x: 75 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 3, { x: 100 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 3, { x: 125 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 3, { x: 150 })
        // .to(this.dogContainer, 1, { repeat:-1, backgroundPosition: "-2400px", ease:SteppedEase.config(10) })
        // .to(this.dogLegDown, 1, { repeat:-1, x:-2250, ease:SteppedEase.config(10) });
    }

//todo - pass dogWalk into render in place of dogContainer

    // dogWalk(){
    //     const dogWalk = new TweenLite({paused: true})
    //         .to(this.dogLegUp, 1, { repeat:-1, backgroundPosition: "-2400px", ease:SteppedEase.config(10) })
    //         .to(this.dogLegDown, 1, { repeat:-1, x:-2250, ease:SteppedEase.config(10) });
    //         this.setState({
    //             dogContainer: dogWalk
    //         })
    //     return(
    //             <>
    //             <img
    //                     src="/images/legs_up.jpg"
    //                     alt=""
    //                     className="img-fluid dog"
    //                     ref={ img => this.dogLegUp = img }
    //                     height="100"
    //                     width="100"/> 
    //                 <img
    //                     src="/images/legs_down.jpg"
    //                     alt=""
    //                     className="img-fluid dog"
    //                     ref={ img => this.dogLegDown = img }
    //                     height="100"
    //                     width="100"/> 
    //             </>
    //         )
    // }


    render() {
        return (
            <>
                <hr />
                <p>Use the buttons below to play with the puppy.</p>
                <div className="mb-2 btn-group">
                    <Button className="btn gsap-btn"
                            onClick={() => this.dogTween.play()}
                            color="primary" variant="outlined"
                            style={{ fontSize: '8px' }} size="small">
                            Play</Button>
                    <Button className="btn gsap-btn"
                            onClick={() => this.dogTween.pause()}
                            color="primary" variant="outlined"
                            style={{ fontSize: '8px' }} size="small">
                            Pause</Button>
                    <Button className="btn gsap-btn"
                            onClick={() => this.dogTween.reverse()}
                            color="primary" variant="outlined"
                            style={{ fontSize: '8px' }} size="small">
                            Reverse</Button>
                    <Button className="btn gsap-btn"
                            onClick={() => this.dogTween.restart()}
                            color="primary" variant="outlined"
                            style={{ fontSize: '8px' }} size="small">
                            Restart</Button>
                </div>
                <div className="dogDiv" ref={div => this.dogContainer = div}>
                    {/* <img
                        src="/images/legs_up.jpg"
                        alt=""
                        className="img-fluid dog"
                        ref={img => this.dogContainer = img}
                        height="100"
                        width="100"/>
                    <img
                        src="/images/legs_down.jpg"
                        alt=""
                        className="img-fluid dog"
                        ref={img => this.dogLegDown = img}
                        height="100"
                        width="100"/> */}
                </div>
            </>
        )
    }
}

export default WaggyTail;