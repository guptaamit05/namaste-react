export const useCustomHook = (colorr) => {
    console.log("custom hook calling...")
    return colorr ? "bg-green-300" : "bg-gray-500";
  };