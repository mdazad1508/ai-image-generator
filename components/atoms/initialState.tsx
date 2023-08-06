import { atom } from "recoil";
import { LeapInferenceSchema } from "@leap-ai/sdk/dist/types/schemas/Inference";

export const aiState = atom(
{
    key: 'aiState', // unique ID (with respect to other atoms/selectors)
    default: {
      prompt:"",
      isLoading:false,
      image:"",
      error:false,
    }, // default value (aka initial value)
  }
  );