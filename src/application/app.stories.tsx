import React from 'react';
import {Meta} from "@storybook/react";
import App from "./App";
import {HashRouterDecorator, ReduxStoreProviderDecorator} from "../stories/decorators/ReduxStoreProviderDecorator";

export default {
    title: 'App Story',
    component: App,
    decorators: [ReduxStoreProviderDecorator, HashRouterDecorator]
} as Meta;

export const AppExample = () => <App/>