import { Component, FunctionComponent } from "preact";
import { Choice } from "./choice";
import { Phone } from "./phone";

export const Rest: FunctionComponent<{
  choice: number;
  setChoice: any;
}> = (props) => {
  const { choice, setChoice } = props;

  return (
    <div id="sleep" class="w-screen h-screen bg-slate-200 ">
      <div class="bg-no-repeat bg-cover bg-[url('../src/assets/imgs/backgroundHome2.svg')] h-full w-full">
        <div class="flex justify-center h-full items-center align-center	flex-wrap items-center w-full">
          <div class="w-1/2 soft backdrop-blur-sm rounded-lg py-20 px-10 ml-[3%] pr-[10%]">
            <p class="lg:text-xl">
              Logically, the best way to spend a free day is to first get some
              rest in the comforts of your home. You go right back to sleep.
              When you do decide to wake up, you first loiter in bed some more
              to do some online shopping, finding that you can use your cash app
              for savings. What next?
            </p>
            <br />
            <Choice
              choice={choice}
              setChoice={setChoice}
              choiceAText="Cook something"
              choiceBText="Game with friends"
            />
          </div>
          <Phone
            title="5% off each app order"
            desc="Clothing Shops"
            icon="iconClothing.png"
          />
        </div>
      </div>
    </div>
  );
};

export const Resturant: FunctionComponent<{}> = () => {
  const returnHome = () => {
    const final = document.getElementById("choiceFinal");
    if (final) {
      final.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="resturant"
      class="bg-gradient-to-t from-yellow-100 via-red-400 to-orange-300 p-0 w-screen h-screen"
    >
      <div class="bg-no-repeat bg-cover bottom-0 w-full h-full bg-[url('../src/assets/imgs/backgroundFood1.svg')]">
        <div class="flex justify-center h-full align-top	items-start pt-20 flex-wrap w-full">
          <div class="w-2/3 backdrop-blur-sm soft rounded-lg py-20 px-10 ml-[5%]">
            <p class=" lg:text-2xl md:mr-[30%] ml-[5%]">
              You grab some food from a vendor you spot with an appetizing meal.
              The food is made tastier to you with the knowledge that you're
              able to swap a boost and get instant savings.
            </p>
            <br />
            <button
              class=" mt-2 border p-2 md:mr-[30%] ml-[5%]  lg:px-5 font-bold  rounded-3xl button__choice lg:py-2 border-black bg-white "
              onClick={returnHome}
            >
              Return home
            </button>
          </div>
          <Phone
            title="10% off each order"
            desc="Resturants"
            icon="iconFood.svg"
          />
        </div>
      </div>
    </div>
  );
};
