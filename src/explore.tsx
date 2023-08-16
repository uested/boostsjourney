import { FunctionComponent } from "preact";
import { Choice } from "./choice";
import { Phone } from "./phone";

export const Explore: FunctionComponent<{
  choice: number;
  setChoice: any;
}> = (props) => {
  const { choice, setChoice } = props;

  return (
    <div
      id="explore"
      class="bg-gradient-to-t from-blue-400 via-blue-400 to-blue-300  w-screen h-screen "
    >
      <div class="bg-no-repeat bg-cover bg-[url('../src/assets/imgs/backgroundTrain.svg')] h-full w-full">
        <div class="flex justify-center h-full items-center align-center	flex-wrap items-center w-full">
          <div class="w-full md:w-1/2 soft backdrop-blur-sm rounded-lg py-20 px-10 ml-[5%]">
            <p class=" lg:text-2xl md:mr-[20%]">
              You're ready for an adventure. You walk to your local subway
              station and take out your cash app, looking at the boosts that are
              available. You use your transporation boost to get a dollar off
              your trip as you head out. Where do you go?
            </p>
            <br />
            <div class="md:mr-[20%]">
              <Choice
                choice={choice}
                setChoice={setChoice}
                choiceAText="Cafe"
                choiceBText="Mall"
              />
            </div>
          </div>

          <Phone
            title="$1 off each ride"
            desc="Subway"
            icon="subway.svg"
          />
        </div>
      </div>
    </div>
  );
};
