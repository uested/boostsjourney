import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

export const Phone: FunctionComponent<{
  title?: string;
  icon?: string;
  desc?: string;
  showGame?: boolean;
}> = (props) => {
  const { title, icon, desc, showGame } = props;
  const [clicked, setClick] = useState(false);
  const [effect, setEffect] = useState(false);

  return (
    <>
      {title ? (
        <div class=" hidden md:block absolute right-0 mr-20 mt-5 mockup-phone border-success">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo phone-1 glass">
              <div class="px-5">
                <div class="w-full ">
                  <h2 class="card-title text-left">Add Boost</h2>
                  <p class="text-left">Save instantly with your card</p>
                </div>
                <div class="card  p-3 my-3 w-full bg-base-100">
                  <div class="relative">
                    <img
                      src={icon}
                      alt="Boost icon image"
                      height="70"
                      width="70"
                      class="bg-slate-200 fill-white w-55 p-3 rounded-full"
                    />

                    <span class="bottom-0 left-11 absolute flex justify-center items-center w-7 h-7 bg-green-400 border-2 border-white dark:border-zinc-800 rounded-full">
                      <span class="material-symbols-rounded icon__material">
                        done
                      </span>
                    </span>
                  </div>

                  <div class="card-body p-0 m-0">
                    <h2 class="card-title">{title}</h2>
                    <p class="text-left">{desc}</p>
                    <div class="card-actions justify-center">
                      <button
                        class={`${
                          !clicked && "hover:bg-zinc-300"
                        } lg:px-5 w-full font-semibold  rounded-3xl  lg:py-2 lg:px-5 border-black bg-zinc-200 `}
                        onClick={() => {
                          setClick(true);
                          setEffect(true);
                        }}
                        disabled={clicked}
                      >
                        {clicked ? <> Added </> : <> Add </>}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {effect && (
                <div
                  onAnimationEnd={() => {
                    console.log("hellooo");
                    setEffect(false);
                  }}
                  class={` opacity-0 absolute bottom-0 bg-green-600 w-full h-fit${
                    effect && "  animate-ripple"
                  }  `}
                >
                  <div class="my-2 text-white text-sm font-bold flex justify-center items-center ">
                    <span class="material-symbols-rounded mr-1">
                      check_circle
                    </span>
                    Boost Activated
                  </div>

                  <div class=" w-full h-3 bg-green-700"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div class="mockup-phone border-success hidden md:block">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo phone-1 px-5 glass">
              <div class="card  p-3 m-3 w-full bg-[#0001f3]">
                <div class="card-body text-white p-0 m-0">
                  <p class="text-left text-sm font-bold">INVITE FRIENDS</p>
                  <p class="text-left text-lg font-bold">
                    Get $10 for every friend who signs up
                  </p>

                  <img class="" src="shareCode.png" />

                  <div class="card-actions justify-center"></div>
                </div>
              </div>
              {showGame && (
                <div class="card  p-3 m-3 w-full bg-base-100">
                  <div class="relative">
                    <img
                      src="iconDiscord.svg"
                      alt="Clothing Icon"
                      height="70"
                      width="70"
                      class="bg-slate-200 fill-white w-55 p-3 rounded-full"
                    />

                    <span class="bottom-0 left-11 absolute flex justify-center items-center w-7 h-7 bg-green-400 border-2 border-white dark:border-zinc-800 rounded-full">
                      <span class="material-symbols-rounded icon__material">
                        done
                      </span>
                    </span>
                  </div>

                  <div class="card-body p-0 m-0">
                    <h2 class="card-title">99% off one in-app order</h2>
                    <p class="text-left">Gaming Platform</p>
                    <div class="card-actions justify-center"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
