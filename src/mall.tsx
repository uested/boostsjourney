import { Component, FunctionComponent } from "preact";
import { Choice } from "./choice";
import { Phone } from "./phone";

export const Mall: FunctionComponent<{
  choice?: number;
  setChoice?: any;
}> = (props) => {
  const { choice, setChoice } = props;

  const returnHome = () => {
    const final = document.getElementById("choiceFinal");
    if (final) {
      final.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="resturant" class="w-screen h-screen">
      <div class="bg-no-repeat bg-cover bottom-0  w-full h-full bg-[url('../src/assets/imgs/backgroundFashion.svg')]">
        <div class="flex justify-center h-full align-top	items-start pt-20 flex-wrap w-full">
          <div class="w-full md:w-1/2 m-5 md:m-0 backdrop-blur-sm soft h rounded-lg p-5 md:py-20 md:px-10 md:ml-[5%]">
            <div class="md:mr-[20%] md:ml-[3%]">
              <div class="alert">
                <div class="rounded-full p-2 w-10 h-10 bg-white">
                  <img
                    class="stroke-info shrink-0 w-6 h-6"
                    src="icon_lightbulb.png"
                  />
                </div>
                <span>
                  Category boosts can get you savings in a specific category.
                </span>
                <div>
                  <button class="btn btn-sm bg-green-600 hover:bg-green-700 text-white">
                    <a
                      target="_blank"
                      href="https://cash.app/help/us/en-us/30981-what-is-a-category-boost"
                    >
                      READ MORE
                    </a>
                  </button>
                </div>
              </div>

              <p class=" lg:text-2xl  my-2">
                You head to the mall and spend time shopping and getting savings
                at all your favorite clothing stores.
              </p>

              {!setChoice ? (
                <button
                  class=" mt-2 border p-2  lg:px-5 font-bold  rounded-3xl button__choice lg:py-2 border-black bg-white lg:mr-5"
                  onClick={returnHome}
                >
                  Return home
                </button>
              ) : (
                <Choice
                  choice={choice}
                  setChoice={setChoice}
                  choiceAText="Meetup with friend"
                  choiceBText="Eat food"
                />
              )}
            </div>
          </div>

          <Phone
            title="10% off"
            desc="Any clothing shop"
            icon="iconClothing.png"
          />
        </div>
      </div>
    </div>
  );
};

export class Shop extends Component {
  render() {
    return (
      <div class="bg-gradient-to-t from-red-300 via-orange-400 to-orange-300 w-screen h-screen bg-slate-100">
        <div class="bg-no-repeat bg-cover w-full h-full bg-[url('../src/assets/imgs/backgroundCandy1.svg')] flex items-end ">
          <div class="w-full mx-20 ">
            <div class="flex w-full md:ml-[15%] justify-items-end	 pb-10">
              <div class=" m-0">
                <Phone />
              </div>
              <div class="backdrop-blur-md soft h-fit w-[35%] rounded-lg py-5 px-10 md:ml-5 ">
                <p class=" lg:text-2xl ">
                  Your friend meets you at a candy store where you can use your
                  boost for your sweets craving. You find that you and your
                  friend can both get bonuses when they use your{" "}
                  <a
                    class="text-green-600 hover:text-green-500   ease-in duration-100 font-bold"
                    href="https://cash.app/help/us/en-us/3124-cash-refer-friends"
                  >
                    Cash App referral code.{" "}
                  </a>{" "}
                  The two of you chat and enjoy each others company.
                </p>
              </div>
              <div id="avatar__friend" class="w-[20%]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
