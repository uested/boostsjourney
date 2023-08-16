import "./style.css";
import { render } from "preact";
import { Avatar } from "./avatar";
import { Gaming } from "./game";
import { useEffect, useRef, useState } from "preact/hooks";
import { Rest, Resturant } from "./rest";
import { Mall, Shop } from "./mall";
import { Cook } from "./cook";
import { Park } from "./park";
import { Phone } from "./phone";
import { Choice } from "./choice";
import { Coffee } from "./coffee";
import { Explore } from "./explore";
import { Footer } from "./footer";

function getChoice(num: number): string | undefined {
  if (num < 0) {
    return undefined;
  }
  return num % 2 == 0 ? "A" : "B";
}

export function isEven(n) {
  return n % 2 == 0;
}

export function App() {
  const [isStayingHome, setIsStayingHome] = useState(-1);
  const stayHomeRef = useRef(null);
  const exploreCityRef = useRef(null);
  const [isCoffee, setIsCoffee] = useState(-1);
  const getCoffeeRef = useRef(null);
  const shopRef = useRef(null);

  useEffect(() => {
    const answer = getChoice(isStayingHome);
    if (answer === "A" && exploreCityRef.current) {
      exploreCityRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (answer === "B" && stayHomeRef.current) {
      stayHomeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isStayingHome]);

  useEffect(() => {
    const answer = getChoice(isCoffee);
    if (answer === "A" && getCoffeeRef.current) {
      getCoffeeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (answer === "B" && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isCoffee]);

  const [isEatingInside, setIsEatingInside] = useState(-1);
  const eatInsideRef = useRef(null);
  const shopInsideRef = useRef(null);
  useEffect(() => {
    const answer = getChoice(isEatingInside);
    if (answer === "A" && eatInsideRef.current) {
      eatInsideRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (answer === "B" && shopInsideRef.current) {
      shopInsideRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isEatingInside]);

  const [isMeetingFriend, setMeetingFriend] = useState(-1);
  const resturantRef = useRef(null);
  const friendRef = useRef(null);

  useEffect(() => {
    const answer = getChoice(isMeetingFriend);

    if (answer === "A" && friendRef.current) {
      friendRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (answer === "B" && resturantRef.current) {
      resturantRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isMeetingFriend]);

  const scrollTop = () => {
    landingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const visitCashApp = () => {
    window.location.href = "https://cash.app/";
  };
  const landingRef = useRef(null);

  return (
    <>
      <div>
        <div
          ref={landingRef}
          id="landing"
          class="bg-gradient-to-t from-blue-300 via-blue-200 to-yellow-100 m-0 w-screen h-screen items-center flex  "
        >
          <div id="landing__section" class=" w-screen h-screen items-top flex">
            <Avatar />

            <div class="flex justify-center	flex-wrap w-full">
              <div class="w-full md:w-1/2 h-fit mt-10 soft rounded-lg p-10 ml-[15%]">
                <p class="lg:text-2xl">
                  It's the weekend morning and as the sun gently filters through
                  the windows of your cozy apartment, you wake up to the
                  bustling metropolis where the city never sleeps and
                  opportunities abound at every turn. See how going throughout
                  the day with your
                  <a
                    href="https://cash.app/"
                    class="text-green-600 hover:text-green-500   ease-in duration-100 font-bold"
                  >
                    {" "}
                    cash app{" "}
                  </a>
                  can boost your journey with endless possibilites. So, how are
                  you going to choose to spend your day today?
                </p>

                <br />

                <Choice
                  choice={isStayingHome}
                  setChoice={setIsStayingHome}
                  choiceAText="Explore The City"
                  choiceBText="Go Back to Sleep"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="choice2" class=" p-0 m-0 h-full w-full">
          {isEven(isStayingHome) || isStayingHome < 0 ? (
            <>
              <div ref={exploreCityRef}>
                <Explore setChoice={setIsCoffee} choice={isCoffee} />
              </div>
              <div
                id="choice3"
                class="w-screen h-screen bg-gradient-to-t from-orange-300 via-orange-200 to-blue-400 p-0 w-screen h-screen "
              >
                {isEven(isCoffee) ? (
                  <div ref={getCoffeeRef}>
                    <Coffee
                      setChoice={setMeetingFriend}
                      choice={isMeetingFriend}
                    />
                  </div>
                ) : (
                  <div ref={shopRef}>
                    <Mall
                      setChoice={setMeetingFriend}
                      choice={isMeetingFriend}
                    />
                  </div>
                )}
              </div>
              <div id="choice4" class="w-screen h-screen">
                {isEven(isMeetingFriend) ? (
                  <div ref={friendRef}>
                    <Shop />
                  </div>
                ) : (
                  <div ref={resturantRef}>
                    <Resturant />
                  </div>
                )}
              </div>
              <div
                id="choiceFinal"
                class="bg-gradient-to-t from-indigo-400 via-indigo-200 to-yellow-100  h-screen w-screen"
              >
                <div class="bg-no-repeat bg-cover bg-[url('../src/assets/imgs/backgroundTrain.svg')] h-full w-full">
                  <div class="flex justify-center h-full items-center align-center	flex-wrap items-center w-full">
                    <div class="w-full md:w-1/2 m-5 md:m-0 md:pr-[15%]  soft backdrop-blur-md rounded-lg p-5 md:ml-[5%]">
                      <div class="alert">
                        <div class="rounded-full p-2 w-10 h-10 bg-white">
                          <img
                            class="stroke-info shrink-0 w-6 h-6"
                            src="icon_lightbulb.png"
                          />
                        </div>
                        <span>
                          Boosts can expire so be sure you check for exciting
                          new boosts you may have missed
                        </span>
                        <div>
                          <button class="btn btn-sm bg-green-600 hover:bg-green-700 text-white">
                            <a
                              target="_blank"
                              href="https://cash.app/help/us/en-us/3097-do-boosts-expire"
                            >
                              READ MORE
                            </a>
                          </button>
                        </div>
                      </div>

                      <p class=" mt-2 lg:text-2xl">
                        You get ready to head back, and as you check and see on
                        the details of your cash app you realize you can reuse
                        your boost. You happily take the subway as you save
                        money again. As the day draws to a close, you're
                        satisfied knowing you're getting great savings for
                        countless activities with your cash app, and you look
                        forward to the journey tomorrow in this city you call
                        home.
                      </p>
                      <br />
                    </div>

                    <Phone
                      title="$1 off each ride"
                      desc="Subway"
                      icon="subway.svg"
                    />
                  </div>
                </div>
              </div>{" "}
            </>
          ) : (
            <>
              <div id="choice3" ref={stayHomeRef}>
                <Rest choice={isEatingInside} setChoice={setIsEatingInside} />
                {isEven(isEatingInside) ? (
                  <>
                    <div ref={eatInsideRef}>
                      <Cook
                        setChoice={setMeetingFriend}
                        choice={isMeetingFriend}
                      />
                    </div>

                    <div
                      id="choice4"
                      class="w-screen h-screen bg-gradient-to-t from-yellow-100 via-red-400 to-orange-300 "
                    >
                      {isEven(isMeetingFriend) ? (
                        <div ref={friendRef}>
                          <Park />
                        </div>
                      ) : (
                        <div ref={resturantRef}>
                          <Mall />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div ref={shopInsideRef}>
                      <Gaming
                        setChoice={setMeetingFriend}
                        choice={isMeetingFriend}
                      />
                    </div>
                    <div id="choice4" class="w-screen h-screen">
                      {isEven(isMeetingFriend) ? (
                        <div ref={friendRef}>
                          <Park />
                        </div>
                      ) : (
                        <div ref={resturantRef}>
                          <Resturant />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div
                id="choiceFinal"
                class="bg-gradient-to-t from-indigo-400 via-indigo-200 to-yellow-100  h-screen w-screen"
              >
                <div class="bg-no-repeat bg-cover bg-[url('../src/assets/imgs/car3.svg')] h-full w-full">
                  <div class="pt-10 flex justify-center h-full items-top align-center	flex-wrap w-full">
                    <div class=" pr-[15%] h-fit w-1/2 soft backdrop-blur-md rounded-lg p-5 ml-[5%]">
                      <div class="alert">
                        <div class="rounded-full p-2 w-10 h-10 bg-white">
                          <img
                            class="stroke-info shrink-0 w-6 h-6"
                            src="icon_lightbulb.png"
                          />
                        </div>
                        <span>
                          Boosts can expire so be sure you check for exciting
                          new boosts you may have missed
                        </span>
                        <div>
                          <button class="btn btn-sm bg-green-600 hover:bg-green-700 text-white">
                            <a
                              target="_blank"
                              href="https://cash.app/help/us/en-us/3097-do-boosts-expire"
                            >
                              READ MORE
                            </a>
                          </button>
                        </div>
                      </div>

                      <p class=" mt-2 lg:text-2xl">
                        You use rideshare to return, and with your boost you
                        save on your trip back. As the day draws to a close,
                        you're satisfied knowing you're getting great savings
                        for countless activities with your cash app, and you
                        look forward to the journey tomorrow in this city you
                        call home.
                      </p>
                      <br />
                    </div>

                    <Phone
                      title="$1 off each ride"
                      desc="Rideshare company"
                      icon="iconCar.svg"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div class="bg-gradient-to-t  from-indigo-950 via-indigo-700 to-indigo-400  h-screen w-screen">
          <div class="bg-no-repeat bg-cover bottom-0 flex justify-center items-center w-screen h-screen bg-[url('../src/assets/imgs/home2.svg')] text-white">
            <div class="backdrop-blur-sm soft--dark rounded-lg w-2/3 p-5">
              <p class="md:text-2xl font-bold">Do more with your money.</p>
              <br />
              <p class="md: text-2xl ">Boost where you</p>
              <div class="md:text-4xl italic font-bold">
                <div class="w-full">eat</div>
                <div class="w-full">drink</div>
                <div class="w-full">play</div>
                <div class="w-full">shop</div>
              </div>
              <div
                class=" text-lg md:text-7xl font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-500 via-[#8AFE46] to-green-300
            animate-text md:py-10 md:mx-5
            "
              >
                What's your boost?
              </div>
              <button
                onClick={scrollTop}
                class="text-black md:ml-5 border mt-5 sm:mt-0 p-2 lg:px-5 font-bold rounded-3xl button__choice lg:py-2 border-black bg-white lg:mr-5"
              >
                Start over
              </button>
              <button
                onClick={visitCashApp}
                class="text-black md:ml-5 border mt-5 sm:mt-0 p-2 lg:px-5 font-bold rounded-3xl button__choice lg:py-2 border-black bg-white lg:mr-5"
              >
                Visit cash app
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

render(<App />, document.getElementById("app"));
