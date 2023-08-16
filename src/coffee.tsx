import { FunctionComponent } from "preact";
import { Choice } from "./choice";

export const Coffee: FunctionComponent<{
  choice: number;
  setChoice: any;
}> = (props) => {
  const { choice, setChoice } = props;

  return (
    <div id="coffee">
      <div class="bg-no-repeat bg-cover  w-full h-full bg-[url('../src/assets/imgs/CafeShop2.svg')]">
        <div class="flex justify-center lg:h-full flex-wrap items-end pb-20 w-full">
          <div class="w-1/2 backdrop-blur-md soft h-[50%] rounded-lg py-5 mb-5 px-10 ml-[20%]">
            <div class="alert">
              <div class="rounded-full p-2 w-10 h-10 bg-white">
                <img
                  class="stroke-info shrink-0 w-6 h-6"
                  src="icon_lightbulb.png"
                />
              </div>
              <span>You can swap Boosts as often as you want.</span>
              <div>
                <button class="btn btn-sm bg-green-600 hover:bg-green-700 text-white">
                  <a
                    target="_blank"
                    href="https://cash.app/help/us/en-us/3096-swap-boosts"
                  >
                    READ MORE
                  </a>
                </button>
              </div>
            </div>

            <p class=" lg:text-2xl ">
              You notice a new cafe and check your boosts, and find that you can
              swap your transportation boost for a coffee one. You enjoy
              drinking the coffee in the ambience of the cafe. After some time
              has passed, you decide what to do next.
            </p>
            <br />
            <Choice
              choice={choice}
              setChoice={setChoice}
              choiceAText="Meetup with friend"
              choiceBText="Eat food"
            />
          </div>

          <div class=" m-0 mockup-phone border-success">
            <div class="camera"></div>
            <div class="display">
              <div class="artboard artboard-demo phone-1 px-5 bg-grey-100">
                <div class="w-full ">
                  <h2 class="card-title text-left">Add Boost</h2>
                  <p class="text-left">Save instantly with your card</p>
                </div>
                <div class="card  p-3 m-3 w-full bg-base-100">
                  <div class="relative">
                    <img
                      src="iconCoffee.png"
                      alt="Coffee Icon"
                      height="70"
                      width="70"
                      class="bg-cyan-400 fill-white w-55 p-3 rounded-full"
                    />

                    <span class="bottom-0 left-11 absolute flex justify-center items-center w-7 h-7 bg-green-400 border-2 border-white dark:border-zinc-800 rounded-full">
                      <span class="material-symbols-rounded icon__material">
                        done
                      </span>
                    </span>
                  </div>

                  <div class="card-body p-0 m-0">
                    <h2 class="card-title">$1 off Each Visit</h2>
                    <p class="text-left">Coffee Shops</p>
                    <div class="card-actions justify-center">
                      <button class="lg:px-5 w-full font-semibold  rounded-3xl  lg:py-2 lg:px-5 border-black bg-zinc-200 hover:bg-zinc-300">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
