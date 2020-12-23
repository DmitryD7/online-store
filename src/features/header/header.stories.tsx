import React from 'react';
import {Meta} from "@storybook/react";
import {Header} from "./header";
import {HashRouterDecorator, ReduxStoreProviderDecorator} from "../../stories/decorators/ReduxStoreProviderDecorator";

export default {
    title: 'Header Story',
    component: Header,
    decorators: [ReduxStoreProviderDecorator, HashRouterDecorator]
} as Meta;

export const HeaderBaseExample = () => <Header/>