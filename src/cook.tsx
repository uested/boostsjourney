import { FunctionComponent } from "preact";
import { Choice } from "./choice";
import { Phone } from "./phone";

export const Cook: FunctionComponent<{
  choice?: number;
  setChoice?: any;
}> = (props) => {
  const { choice, setChoice } = props;

  return (
    <div id="resturant" class="w-screen h-screen">
      <div class="bg-no-repeat bg-cover bottom-0  w-full h-full bg-[url('../src/assets/imgs/backgroundKitchen.svg')]">
        <div class="flex justify-center h-full align-top	items-start pt-20 flex-wrap w-full">
          <div class="w-1/2 backdrop-blur-sm soft h rounded-lg py-20 px-10 ml-[5%]">
            <div class="mr-[30%] ml-[5%]">
              <p class=" lg:text-2xl  md:mb-2">
                You head to your kitchen. You find you're running out of milk
                and eggs - no problem, you know that with Cash App you can order
                groceries online and get savings. You whip something up to eat
                and with your hunger satiated, what do you choose to do next?
              </p>

              <Choice
                choice={choice}
                setChoice={setChoice}
                choiceAText="Walk in the park"
                choiceBText="Go shopping"
              />
            </div>
          </div>

          <Phone
            title="5% off one order"
            desc="Any Grocery Store"
            icon="iconCart.svg"
          />
        </div>
      </div>
    </div>
  );
};
