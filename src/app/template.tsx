"use client";


import {PageTransition} from "@/components/utills/page-transitions";

export default function Template({ children }: { children: React.ReactNode }) {
    return <PageTransition>{children}</PageTransition>;
}
