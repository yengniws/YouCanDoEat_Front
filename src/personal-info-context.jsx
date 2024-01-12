import { createContext, useState } from "react";

export const InfoContext = createContext({
  weight: 0,
  foodCalories: 0,
  addBurnedCal: () => {},
  totalBurnedCalories: 0,
  changeWeight: () => {},
  foodName: "",
  changeNameCal: () => {}
});

export default function InfoContextProvider({children}){

  const [totalBurnedCalories, setTotalBurnedCalories] = useState(9);
  const [weight, setWeight] = useState(0);
  const [foodName, setFoodName] = useState("");
  const [foodCalories, setFoodCalories] = useState(0);

  function handleAddBurnedCalories(newlyBurned){
    setTotalBurnedCalories((prev) => prev + newlyBurned);
    console.log('Calories are burned');
    console.log(newlyBurned);
  };

  function handleSubmitWeight(weight){
    console.log(weight);
    setWeight(weight);
  }

  function handleNameCal(name, cal){
    console.log(name, cal);
    setFoodName(name);
    setFoodCalories(cal);
  }

  const ctxValue = {
    weight: weight,
    foodCalories: foodCalories,
    addBurnedCal: handleAddBurnedCalories,
    changeWeight: handleSubmitWeight,
    changeNameCal: handleNameCal,
    totalBurnedCalories: totalBurnedCalories,
    foodName: foodName,
  };

  return (
    <InfoContext.Provider value={ctxValue}>
      {children}
    </InfoContext.Provider>
  )
}