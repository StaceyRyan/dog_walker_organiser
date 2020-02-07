import React from 'react';
import { TimelineLite, CSSPlugin } from 'gsap/all';
import Button from '@material-ui/core/Button';

class WaggyTail extends React.Component {
    constructor(props) {
        super(props);
        this.dogContainer = null;
        this.dogTween = null;
    }

    componentDidMount() {
        //Need the TweenLite to provide access to built-in GSAP stuff like reverse, restart etc
        this.dogTween = new TimelineLite({ paused: true })
            .to(this.dogContainer, 2, { x: 100 });
            // .to(this.dogContainer, 1, {
            //     // rotation: 360,
            //     transformOrigin: "center"
            // });
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
                </div>;
            </>
        )
    }
}

export default WaggyTail;