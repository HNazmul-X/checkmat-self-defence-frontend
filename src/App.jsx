import { useState } from "react";
import "./Styles/tailwindOutput.css"
import "./Styles/Custom.css"
import "sweetalert2/src/sweetalert2.scss"
import PrimaryRouter from "./Router/PrimaryRouter";

function App() {
    const [count, setCount] = useState(0);

    return <PrimaryRouter />;
}

export default App;
