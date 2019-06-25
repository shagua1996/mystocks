import React from "react";
import ReactDOM from "react-dom";
import App from "./views/app/app";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { LocaleProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store/index";

let Pro = (
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <App />
    </LocaleProvider>
  </Provider>
);
ReactDOM.render(Pro, document.getElementById("root"));
/*
夜里做了一个美丽的梦，梦里李易峰把我抱住。
我用了一半的青春去思考做人的道理
*/
