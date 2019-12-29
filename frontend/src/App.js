import React, { Suspense } from "react";
import RoutesComponent from "./view/shared/routes/RoutesComponent";
import { ConnectedRouter } from "connected-react-router";
import {getHistory, configStore} from "./modules/store";
import { Provider } from "react-redux";
import Spinner from "./view/shared/Spinner";
import { GlobalStyles } from "./styles/globalstyles";

const store = configStore();

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Provider store={store}>
                <GlobalStyles />
                <ConnectedRouter history={getHistory()}>
                    <RoutesComponent />
                </ConnectedRouter>
            </Provider>
        </Suspense>
    );
}

export default App;
