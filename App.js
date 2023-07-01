import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import StackMiddleware from "./src/middlewares/StackMiddleware";

export default function App() {
  return (
    <Provider store={store}>
      <StackMiddleware />
    </Provider>
  );
}
