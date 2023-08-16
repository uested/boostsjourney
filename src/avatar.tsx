import { Component } from "preact";
import { useState, useEffect } from "preact/hooks";

export class Avatar extends Component {
  render() {
    const [scroll, setScroll] = useState(false);

    const [wink, setWink] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        let choiceTwoY = document
          .getElementById("choice2")
          .getBoundingClientRect().y;

        let choiceThreeY = document
          .getElementById("choice3")
          .getBoundingClientRect().y;

        let choiceFourY = document
          .getElementById("choice4")
          .getBoundingClientRect().y;

        let choiceFinal = document
          .getElementById("choiceFinal")
          .getBoundingClientRect().y;

        let choiceSleep = document.getElementById("sleep");

        if (choiceSleep) {
          let choiceSleepy = choiceSleep.getBoundingClientRect().y;

          console.log(choiceSleep.getBoundingClientRect());
          if (choiceSleepy < 400 && choiceSleepy > -300) {
            setWink(true);
          } else {
            setWink(false);
          }
        }

        if (
          (choiceTwoY > 0 && window.scrollY > 50) ||
          (choiceThreeY > 0 && choiceTwoY < 0 && choiceTwoY < -500) ||
          (choiceFourY > 0 && choiceThreeY < 0 && choiceThreeY < -500) ||
          (choiceFinal > 0 && choiceFourY < 0 && choiceFourY < -500)
        ) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      });
    }, []);

    return (
      <div
        class={`${
          scroll ? "animate-walk" : wink ? "animate-wink" : ""
        } bg-[url('../src/assets/imgs/stand.png')]`}
        id="avatar"
      ></div>
    );
  }
}
