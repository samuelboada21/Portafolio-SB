import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Principal  from "./Pages/Principal"
import theme from './utils/Chakra-theme'
import './App.css'
import PageNotFound from "./Pages/PageNotFound";

function App() {

  return (
    <>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Principal/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
      
    </>
  )
}

export default App
