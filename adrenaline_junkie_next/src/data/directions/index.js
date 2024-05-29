import { startTransition } from "react";
import states from "./states";

const directions = {
  east: [
    states.Assam,
    states.Nagaland,
    states.Meghalaya,
    states.Manipur,
    states.Tripura,
    states.Mizoram,
    states.WestBengal,
  ],
  west: [
    states.Rajasthan,
    states.Gujarat,
    states.MadhyaPradesh,
    states.Odisha,
    states.Chattisgarh,
    states.Bihar,
    states.Jharkhand,
  ],
  north: [
    states.HimachalPradesh,
    states.Punjab,
    states.Uttarakhand,
    states.Haryana,
    states.Sikkim,
    states.Arunachalpradesh,
    states.Uttarpradesh,
  ],
  south: [
    states.Maharashtra,
    states.Karnataka,
    states.Telangana,
    states.Andhrapradesh,
    states.Kerala,
    states.TamilNadu,
    states.Goa,
  ],
};

export default directions;
