import { Component } from "preact";
import { Phone } from "./phone";

export class Park extends Component {
  render() {
    const returnHome = () => {
      const final = document.getElementById("choiceFinal");
      if (final) {
        final.scrollIntoView({ behavior: "smooth" });
      }
    };




    return (
      <div
        id="resturant"
        class="bg-gradient-to-t from-yellow-100 via-red-400 to-orange-300 p-0 m-0 w-screen h-screen"
      >
        <div class="bg-no-repeat bg-cover bottom-0 w-full h-full bg-[url('../src/assets/imgs/hike.svg')]">
          <div class="flex justify-center h-full align-top	items-start pt-20 flex-wrap w-full">
            <div class="w-1/2 backdrop-blur-sm soft rounded-lg py-20 px-10 ml-[5%]">
              <p class=" lg:text-2xl mr-[15%] ml-[5%]">
                You decide to go touch some grass and take a walk in the park.
                Your sneakers are getting scuffed but you know that you can get
                new kicks and get savings as well with your shoe boost. You
                enjoy watching the sunset at the park.
              </p>
        
              <button
                class=" mt-2 border p-2  lg:px-5 font-bold  rounded-3xl button__choice lg:py-2 border-black bg-white lg:mr-5"
                onClick={returnHome}
              >
                Return home
              </button>
            </div>

            <Phone
              title="15% off one order"
              desc="Shoes"
              icon="iconShoe.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}
