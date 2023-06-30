import { NavigationContainer } from "@react-navigation/native";
import RootStack from "../stack/RootStack";
import AuthStack from "../stack/AuthStack";
import { useSelector } from "react-redux";
import { selectSession } from "../slices/sessionSlice";

export default function StackMiddleware() {
  const session = useSelector(selectSession);
  console.log(session);
  return (
    <NavigationContainer>
      {session ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
