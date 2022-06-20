import { createRoot } from 'react-dom/client';
import Quiz from "./Components/Quiz";
import "./scss/index.scss";

const container = document.getElementById('app');
const root = createRoot(container);

const App = () =><Quiz/>

root.render(<App tab="home" />);
