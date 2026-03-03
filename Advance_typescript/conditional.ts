{
  //  conditional types
  type a1 = null;
  type b2 = undefined;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  type x = a1 extends null ? true : false; // conditional type;

  type y = a1 extends null ? true : b2 extends undefined ? undefined : any;

  type checkVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type checkVehicle2<T> = T extends keyof Sheikh ? true : false;

  type hashBike = checkVehicle<"bike">;
}
