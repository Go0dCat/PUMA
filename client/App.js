/* #8 för hur vi kan spara data för vilken knapp användaren trycker på i quizet*/
/* #10 för hur vi kan skapa papperskorgen när vi vill slänga en dryck i mina drycker */

import React, { useState } from "react";
import Home from "./screens/home";

export default function App() {
  const [name, setName] = useState("sara");

  return (
    /* Kanske inte använda SafeAreaView och padda istället så att
        färgen når hela vägen upp. */
    <Home />
  );
}
