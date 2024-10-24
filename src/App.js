import { Provider } from "react-redux";
import Body from "./componenets/Body";
import appStore from "./reduxStore/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
