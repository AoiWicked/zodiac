"use client";

import React, { Suspense, useState } from "react";
import { Forecast } from "@/components/Forecast/Forecast";
import { SelectZodiac } from "@/components/UI/SelectZodiac/SelectZodiac";
import SelectDays from "@/components/UI/SelectDays/SelectDays";

export default function Home() {
    return (
        <div className="home">
            <div className="selectors">
                <SelectDays />
                <SelectZodiac />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Forecast />
            </Suspense>
        </div>
    );
}
