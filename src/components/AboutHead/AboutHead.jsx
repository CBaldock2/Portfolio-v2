import React from "react";
import TypeWriter from 'typewriter-effect';

function AboutHead() {
    return (
        <TypeWriter
            onInit={(typewriter) => {
                typewriter
                    .changeDelay(25)
                    .changeDeleteSpeed(20)
                    .typeString("Hello, I'm Chris. I'm a ")
                    .pauseFor(600)
                    .typeString("Carpenter")
                    .pauseFor(400)
                    .deleteChars(9)
                    .typeString("Husband")
                    .pauseFor(400)
                    .deleteChars(7)
                    .typeString("Friend...?")
                    .pauseFor(300)
                    .deleteChars(11)
                    .typeString("n Adventurer")
                    .pauseFor(400)
                    .deleteChars(12)
                    .typeString(" Cook")
                    .pauseFor(300)
                    .deleteChars(4)
                    .typeString(" Cat Dad")
                    .pauseFor(600)
                    .deleteChars(8)
                    .changeDelay(60)
                    .typeString(" ...")
                    .pauseFor(1000)
                    .changeDeleteSpeed(40)
                    .deleteChars(10)
                    .typeString(" A Full-Stack Developer")
                    .start();
            }}
        />
    )
}

export default AboutHead