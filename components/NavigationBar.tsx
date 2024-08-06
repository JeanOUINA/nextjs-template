"use client";

import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Image from "next/image";
import NextLink from "./NextLink";
import Head from "next/head";

export default function NavigationBar() {
    return <>
        <AppBar position="sticky" sx={{
            background: "#000"
        }}>
            <Toolbar sx={{
                gap: 1,
                alignItems: "center"
            }}>
                <NextLink href="/">
                    <Button>
                        <Image
                            src={"/favicon.png"}
                            alt="Website Logo"
                            draggable={false}
                            width={48}
                            height={48}
                            priority
                        />
                    </Button>
                </NextLink>

                <Box sx={{
                    flexGrow: 1
                }} />

                <NextLink
                    href="/wawa"
                >
                    <Button variant="contained">
                        wawa
                    </Button>
                </NextLink>
            </Toolbar>
        </AppBar>
    </>
}