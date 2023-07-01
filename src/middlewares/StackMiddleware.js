import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectSession } from "../slices/sessionSlice";
import HomeStack from "../stack/HomeStack";
import AuthStack from "../stack/AuthStack";

export default function StackMiddleware() {
  const session = useSelector(selectSession);

  return (
    <NavigationContainer>
      {session ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
