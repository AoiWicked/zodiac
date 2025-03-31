"use client";

import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/store";

const store = makeStore();

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return <Provider store={store}>{children}</Provider>;
}
