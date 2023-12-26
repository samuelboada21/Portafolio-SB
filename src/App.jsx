import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Principal  from "./Pages/Principal"
import './App.css'

function App() {

  return (
    <>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Principal/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
      
    </>
  )
}

export default App
