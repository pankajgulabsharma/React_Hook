import React from 'react';
import './App.css';
import UseState_Fun from "./UseState_Fun";
import CurrentTime from "./CurrentTime";
import CurrentTime2 from "./CurrentTime2";
import Conditional_InLineStyle from './Conditional_InLineStyle';
import EventHandling from "./EventHandling";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import ToDoList from "./ToDoList";
import ToDoList2 from "./ToDoList2";
import Increment_Decrement from "./Increment_Decrement";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from './Bootstrap';

import ContextAPI from './ContextAPI';
import UseEffect from './UseEffect';
import Axios from './Axios';

import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NavComp1 from './NavComp1';
import NavComp2 from './NavComp2';
import NavComp3 from './NavComp3';
import NavComp4 from './NavComp4';
import PageError from './PageError';
import UseParams from './UseParams';
import Search from './Search';
import Google_Keep from './Google_Keep';


function App() {
  return (
    <>
      <UseState_Fun />
      <CurrentTime />
      <CurrentTime2 />
      <Conditional_InLineStyle />
      <EventHandling />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <ToDoList />
      <Increment_Decrement />
      <ToDoList2 />
      <button className="btn btn-success">Button</button>
      <Bootstrap />
      <ContextAPI />
      <UseEffect />
      <Axios />

      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={NavComp1} /> */}
        {/* <Route exact path="/navcomp2" component={NavComp2} /> */}

        {/* this above lines is commented bcz i want to show how pass props in Component of route and also the difference between render(render only specific nodes) and component(again render all nodes) attribute  */}
        <Route exact path="/" component={()=><NavComp1 myname="pankaj"/>} />
        <Route path="/navcomp2" render={()=><NavComp2 my school_name="sent Raghuvir"/>} />
        <Route exact path="/navcomp3" component={NavComp3} /> {/* we r putting exact here bcz this line and it's below line having same initialization i.e /navcomp3 and u know Route see it's initial value and on the basis of that is shows component */}
        <Route path="/navcomp3/navcomp4" component={NavComp4} />
        <Route path="/useparams/:fname/:lname" component={UseParams} />{/* this line indidates if u want data inside of User tab then u need to use http://localhost:3000/useparams/pankaj see instead of pankaj u can write any fname*/}
        <Route path="/search" component={Search} />
        <Route component={PageError}></Route>
      </Switch>

      <Google_Keep />

    </>
  );
}

export default App;
