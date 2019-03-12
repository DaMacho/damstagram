import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import I18n from "redux-i18n"
import { ConnectedRouter } from "connected-react-router"
import store, { history } from "redux/configureStore";
import App from "components/App";
import { translations } from "translations"

import "ReactotronConfig"

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <I18n translations={translations} initiallang="en" fallbackLang="en">
        <App />
      </I18n>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
