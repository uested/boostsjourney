import { FunctionComponent } from "preact";
import { isEven } from ".";

export const Choice: FunctionComponent<{
    choice: number;
    setChoice: any;
    choiceAText: string;
    choiceBText: string;
  }> = (props) => {
    const { choice, setChoice, choiceAText, choiceBText } = props;
    console.log("choic is this", choice);
  
    const selectChoiceA = () => {
      setChoice(isEven(choice) ? choice + 2 : choice + 1);
    };
    const selectChoiceB = () => {
      setChoice(isEven(choice) ? choice + 1 : choice + 2);
    };
    return (
      <div>
        <button
          class=" border p-2  lg:px-5 font-bold  rounded-3xl button__choice lg:py-2 border-black bg-white lg:mr-5"
          onClick={selectChoiceA}
        >
          {choiceAText}
        </button>
  
        <button
          onClick={selectChoiceB}
          class="md:ml-5 border mt-5 sm:mt-0 p-2 lg:px-5 font-bold rounded-3xl button__choice lg:py-2 border-black bg-white lg:mr-5"
        >
          {choiceBText}
        </button>
      </div>
    );
  };
  