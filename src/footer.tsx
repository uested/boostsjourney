import { Component } from "preact";

export class Footer extends Component {
  render() {
    return (
      <div class="bg-slate-900 w-screen py-20 flex  px-10 text-white justify-center">
        <div class="w-full text-slate-500 ">
          <p>
            Disclaimer: This website has no affiliation with Cash App and is is
            made by Anne Xu using Preact, Typescript, Tailwind, and CSS as a
            mock design concept inspired by the Boost feature. She has no
            relation to cash app (though she really likes the product and thinks
            it would be cool if she did). Find the github code{" "}
            <a
              class="text-slate-400 hover:text-slate-300"
              href="https://github.com/uested/boostjourney"
            > 
              here.{" "}
            </a>
          </p>
        </div>
        <div class="w-1/2 mx-10 text-center items-center flex justify-center ">
          <div class="collapse bg-slate-800 text-gray-500 text-sm ">
            <input type="checkbox" />
            <div className="collapse-title  justify-center w-full items-center margin-auto m-0 px-0 text-gray-400">
              Icons and Graphics Credits{" "}
            </div>
            <div className="collapse-content">
              <a class="hover:text-gray-400" href="https://storyset.com/nature">
                Nature illustrations by Storyset
              </a>
              <br />
              <a
                class="hover:text-gray-400"
                href="https://storyset.com/shopping"
              >
                Shopping illustrations by Storyset
              </a>
              <br />
              <a
                class="hover:text-gray-400"
                href="https://storyset.com/business"
              >
                Business illustrations by Storyset
              </a>
              <br />
              <a class="hover:text-gray-400" href="https://storyset.com/city">
                City illustrations by Storyset
              </a>
              <br />
              <a class="hover:text-gray-400" href="https://storyset.com/home">
                Home illustrations by Storyset
              </a>
              <br />
              <a
                class="hover:text-gray-400"
                href="https://storyset.com/technology"
              >
                Technology illustrations by Storyset
              </a>
              <br />
              <a
                class="hover:text-gray-400"
                href="https://storyset.com/business"
              >
                Business illustrations by Storyset
              </a>
              <br />
              <a
                class="hover:text-gray-400"
                href="https://storyset.com/computer"
              >
                Computer illustrations by Storyset
              </a>
              <br />
              <a class="hover:text-gray-400" href="https://storyset.com/people">
                People illustrations by Storyset
              </a>
              <br />
              <a
                class="hover:text-gray-400"
                href="https://storyset.com/technology"
              >
                Technology illustrations by Storyset
              </a>
              <br />
              <a class="hover:text-gray-400" href="https://storyset.com/people">
                People illustrations by Storyset
              </a>
              <br />
              <a
                class="hover:text-gray-400"
                href="https://blush.design/collections/open-peeps/open-peeps"
              >
                Avatar graphics by Pablo Stanley
              </a>
              <a
                class="hover:text-gray-400"
                href="https://icons8.com/icon/iwwEQOLTpQl3/clothes"
              >
                Clothes icon by Icons8
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
