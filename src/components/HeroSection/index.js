import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElement'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HerobtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
            <HeroH1> Virtual bank made easy</HeroH1>
            <HeroP>
                Sign up for a new account today and receive 250$ in credit towar
            </HeroP>
            <HerobtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HerobtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection