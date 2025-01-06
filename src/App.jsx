import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/Header/header";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import AppSidebar from "./components/AppSidebar/sidebar";
import HomePage from "./pages/homepage";

function App() {
  return (
    <>
      <SidebarProvider>
        <HomePage />
        <AppSidebar />
      </SidebarProvider>
    </>
  );
}

export default App;
