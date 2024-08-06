"use client";

import NextLinkComponent from "next/link";
import { Link as MuiLink } from "@mui/material";
import React from "react";

export default function NextLink(props: {
    href: string,
    children: React.ReactNode
}) {
    return <MuiLink
        component={NextLinkComponent}
        href={props.href}
    >
        {props.children}
    </MuiLink>
}