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
import { PostList } from "pages/posts/list";
import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";
import { PostShow } from "pages/posts/view";
import { PostEdit } from "pages/posts/edit";
import { PostCreate } from "pages/posts/create";

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
        resources={[
          {
            name: "posts",
            icon: '',
            list: PostList,
            show: PostShow,
            create: PostCreate,
            edit: PostEdit,
            canDelete: true,
          }
        ]}
      />
    </ChakraProvider>
  );
}

export default App;
