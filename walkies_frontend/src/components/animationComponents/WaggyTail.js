import React from 'react';
import { TimelineLite, CSSPlugin, TweenLite, TweenMax, SteppedEase } from 'gsap/all';
import Button from '@material-ui/core/Button';

class WaggyTail extends React.Component {
    constructor(props) {
        super(props);
        this.dogContainer = null;
        this.dogTween = null;
        this.dogFlicker = null;
    }

    componentDidMount() {
        //Need the TweenLite to provide access to built-in GSAP stuff like reverse, restart etc
        //TweenLite SteppedEase config number = how many steps to take
        //TweenLite x value is finish position on X axis
        // Integer in front of {} is the number of seconds the tween takes
        this.dogTween = new TimelineLite({ paused: true })
            .to(this.dogContainer, 3, { x: 200 })
            .to(this.dogContainer, 1, { repeat:-1, backgroundPosition: "-2400px", ease:SteppedEase.config(10) })
            .to(this.dogFlicker, 1, { repeat:-1, x:-2250, ease:SteppedEase.config(10) });
    }


    render() {
        return (
            <>
                <p>Use the buttons below to play with the puppy.</p>
                <div className="mb-2 btn-group">
                    <Button className="btn gsap-btn"
                            onClick={() => this.dogTween.play()}
                            color="primary" variant="outlined"
                            size="small">
                            Play</Button>
                    <Button className="btn gsap-btn"
                            onClick={() => this.dogTween.pause()}
                            color="primary" variant="outlined"
                            size="small">
                            Pause</Button>
                    <Button className="btn gsap-btn"
                            onClick={() => this.dogTween.reverse()}
                            color="primary" variant="outlined"
                            size="small">
                            Reverse</Button>
                    <Button className="btn gsap-btn"
                            onClick={() => this.dogTween.restart()}
                            color="primary" variant="outlined"
                            size="small">
                            Restart</Button>
                </div>

                <hr />

                <div>
                    <img
                        src="/images/legs_down.jpg"
                        alt=""
                        className="img-fluid dog"
                        ref={ img => this.dogContainer = img }
                        height="100"
                        width="100"/>
                    <img
                        src="/images/legs_up.jpg"
                        alt=""
                        className="img-fluid dog"
                        ref={ img => this.dogFlicker = img }
                        height="100"
                        width="100"/>
                </div>;
            </>
        )
    }
}

export default WaggyTail;