"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import dark from "./themes/dark"
import { Alert, CssBaseline, Divider } from '@mui/material';
import NavigationBar from '../components/NavigationBar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={{ backgroundColor: dark.palette.background.default }}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={dark}>
                        <CssBaseline />
                        <noscript>
                            <Alert severity="error" variant="filled" sx={{
                                margin: 2
                            }}>
                                This website requires JavaScript to function properly.
                            </Alert>
                            <Divider />
                        </noscript>
                        <NavigationBar />
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
