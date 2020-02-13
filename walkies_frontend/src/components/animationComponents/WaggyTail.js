import React from 'react';
import './WaggyTail.css';
import { TimelineLite } from 'gsap/all';
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
        //TweenLite x value is finish position on X axis
        // Integer in front of {} is the number of seconds the tween takes
        this.dogTween
        .to(this.dogContainer, 1, { x: 100 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 110 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 120 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 130 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 140 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 150 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 160 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 170 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 180})
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 190 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 200 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 210 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 220 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 230 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 240 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 250 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 260 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 270 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 280 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 290 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_down-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 300 })
        .set(this.dogContainer, {css:{backgroundImage:'url(images/legs_up-small.jpg)'}})
        .to(this.dogContainer, 1, { x: 310 })
    }

    render() {
        return (
            <>
                <hr />
                <div className="dogDiv" ref={div => this.dogContainer = div}>
                        </div>
                <p style={{ fontSize: '8px' }}>Use the buttons below to play with the puppy.</p>
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
            </>
        )
    }
}

export default WaggyTail;