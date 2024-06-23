import "./styles.css";
import { createBrowserRouter,
   Route, 
  createRoutesFromElements,RouterProvider,
  router
  } from "react-router-dom";

  //pages
import Home from './components/pages/Home' ;
import About from './components/pages/About';
 import Advice from './components/pages/LegalAdvice/Advice';
 import Question from "./components/pages/LegalAdvice/Question";
 import Cases,{casesLoader} from "./components/pages/Cases/Cases";
 import NotFound from "./components/pages/NotFound";
 import CasesDetails,{CasesDetailsLoader}  from "./components/pages/Cases/CasesDetails";

//Layouts
import MasterLayout from './components/layouts/MasterLayout';
import LegalAdviceLayout from "./components/layouts/LegalAdviceLayout";
import CasesLayout from "./components/layouts/CasesLayout";
import { Component } from "react";
import CasesError from "./components/pages/Cases/CasesError";
import { questionAction } from "./components/pages/LegalAdvice/Question";


const projectrouter =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="legalAdvice" element={<LegalAdviceLayout/>}>
          <Route path="advice" element={<Advice/>} />
          <Route path="question" element={<Question/>} action={questionAction} />
        </Route>
        <Route path="cases" element={<CasesLayout/>} errorElement={<CasesError/>}>
          <Route index    
                 element={<Cases/>}
                 loader={casesLoader}
          
          />
          <Route
          path=":id"
          element={<CasesDetails />}
          loader={CasesDetailsLoader}

           
          />

        

        </Route>
          <Route path="*" element={<NotFound/>} />
      </Route>

  )
)


function App()
{
  return (
    
    <RouterProvider router={projectrouter} />
        
  );
}

export default App;
