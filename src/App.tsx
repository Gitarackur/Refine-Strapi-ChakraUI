import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-chakra-ui";

import { DataProvider } from "@pankod/refine-strapi-v4";
import routerProvider from "@pankod/refine-react-router-v6";
import { Title, Sider, Layout, Header } from "components/layout";
import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";

function App() {
  return (
    <ChakraProvider theme={refineTheme}>
      <Refine
        authProvider={authProvider}
        dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
        notificationProvider={notificationProvider()}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        Title={Title}
        Sider={Sider}
        Layout={Layout}
        Header={Header}
        routerProvider={routerProvider}
      />
    </ChakraProvider>
  );
}

export default App;
