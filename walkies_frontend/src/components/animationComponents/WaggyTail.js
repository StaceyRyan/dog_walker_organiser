import React from 'react';
import { TimelineLite, CSSPlugin } from 'gsap/all';

class WaggyTail extends React.Component {
    constructor(props) {
        super(props);
        this.dogContainer = null;
        this.dogTween = null;
    }

    componentDidMount() {
        //Need the TweenLite to provide access to built-in GSAP stuff like reverse, restart etc
        this.dogTween = new TimelineLite({ paused: true })
            .to(this.dogContainer, 2, { x: 500 })
            .to(this.dogContainer, 1, {
                rotation: 360,
                transformOrigin: "center"
            });
    }

    render() {
        return (
            <>
                <img
                    src="/images/earDown.jpg"
                    alt=""
                    className="img-fluid dog"
                    ref={img => this.dogContainer = img}
                />
            </>
        )
    }
}

export default WaggyTail;