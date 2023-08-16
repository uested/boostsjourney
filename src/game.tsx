import { FunctionComponent } from "preact";
import { Choice } from "./choice";
import { Phone } from "./phone";

export const Gaming: FunctionComponent<{
  choice: number;
  setChoice: any;
}> = (props) => {
  const { choice, setChoice } = props;

  return (
    <div class="bg-slate-200 w-screen h-screen">
      <div class="bg-no-repeat bg-cover w-full h-full bg-[url('../src/assets/imgs/backgroundGaming3.svg')] flex items-end ">
        <div class="w-full mb-10 ">
          <div class="flex items-end">
            <div class="backdrop-blur-sm w-1/2 soft h-[50%] rounded-lg py-5 mb-5 px-10 ml-[20%]">
              <p class=" lg:text-2xl mb-5 ">
                Food can wait. You put on your headset to join your friends in
                gaming session, finding that you can buy better equipment and
                save money while you're at it through a gaming boost. You tell
                your friends how they can also get bonuses when they use your{" "}
                <a
                  class="text-green-600 hover:text-green-500   ease-in duration-100 font-bold"
                  href="https://cash.app/help/us/en-us/3124-cash-refer-friends"
                >
                  Cash App referral code.
                </a>{" "}
                After some GGs, what do you do?
              </p>
              <Choice
                choice={choice}
                setChoice={setChoice}
                choiceAText="Go walking"
                choiceBText="Eat food"
              />
            </div>

            <Phone showGame={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
