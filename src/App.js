import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import NextSec from "./Components/NextSec/NextSec";
import Pagination from "./Components/Pagination/Pagination";
import Accordion from "./Components/Accordion/Accordion"
import Collapse from "./Components/Collapse/Collapse";
import ListGroup from "./Components/List-Group/ListGroup";
// import Alerts from "./Components/Alerts/Alerts";
// import Carousel from "./Components/Carousel/Carousel";
// import LoginForm from "./Components/LoginForm";

function App(props) {
  return (
    <>
      <Navbar />
      <Home />
      <Collapse />
      < ListGroup />
      {/* <Alerts /> */}
      {/* <Carousel /> */}
      <hr />
      <NextSec />
      <hr />
      <Accordion />
      <Pagination />
      {/* <LoginForm /> */}
    </>
  );
}

export default App;
