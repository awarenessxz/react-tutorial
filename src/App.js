import React from 'react';
import Greet from "./components/Greet"; // eslint-disable-line
import Welcome from "./components/Welcome"; // eslint-disable-line
import { HelloJSX, HelloReact } from "./components/JSX"; // eslint-disable-line
import { GreetProps, WelcomeProps, GreetProps2A, GreetProps2B, WelcomeProps2 } from './components/Props'; // eslint-disable-line
import { Message, Counter } from "./components/States"; // eslint-disable-line
import { FunctionClick, ClassClick, EventBind } from "./components/EventHandler"; // eslint-disable-line
import ParentComponent from "./components/ParentComponent"; // eslint-disable-line
import { UserGreeting1, UserGreeting2, UserGreeting3, UserGreeting4 } from "./components/ConditionRender"; // eslint-disable-line
import { NameList, PersonNameList } from "./components/ListRender"; // eslint-disable-line
import { StyleSheet, Inline, ModuleStyleSheet } from "./components/StyleSheet"; // eslint-disable-line
import Form from "./components/FormHandling"; // eslint-disable-line
import LifeCycleA from "./components/ComponentLifeCycle"; // eslint-disable-line
import { FragmentDemo, Table } from './components/Fragments'; // eslint-disable-line
import ParentComp from './components/PureComponent'; // eslint-disable-line
import { RefsDemo, FocusInput, FRParentInput } from './components/Refs'; // eslint-disable-line
import Portal from './components/Portal'; // eslint-disable-line
import HeroDemo from './components/ErrorBoundary'; // eslint-disable-line
import { ClickCounter, HoverCounter, EnhancedClickCounter, EnhancedHoverCounter } from './components/HigherOrderComponent'; // eslint-disable-line
import { ClickCounterV2, HoverCounterV2, User, RenderCounter } from "./components/RenderProps"; // eslint-disable-line
import { ComponentA, UserProvider} from "./components/Context"; // eslint-disable-line
import { ClassCounter, HookCounter, HookCounterV2, HookCounterV3, HookCounterV4 } from "./components/UseStateHook"; // eslint-disable-line
import { ClassCounterEffects, HookCounterEffects, HookCounterEffectsV2, ClassMouse, HookMouse, MouseContainer, IntervalClassCounter, IntervalHookCounter } from "./components/UseEffectsHook"; //eslint-disable-line
import { DataFetching } from "./components/DataFetching"; // eslint-disable-line
import { ComponentA1, ChannelContext, ChannelContext2 } from "./components/UseContext"; // eslint-disable-line
import { CounterOne, CounterTwo, CounterThree, ComponentA3 } from "./components/UseReducer"; // eslint-disable-line
import { DataFetchingOne, DataFetchingTwo } from "./components/DataFetchingUseReducer"; // eslint-disable-line
import { ParentComponentCallBack, ParentComponentCallBackWithMemo } from "./components/useCallBack"; // eslint-disable-line
import MemoCounter from "./components/UseMemo"; //eslint-disable-line
import { FocusInputuseRef, ClassTimer, HookTimer } from "./components/useRef"; //eslint-disable-line
import { DocTitleOne, DocTitleTwo, DocTitleThree, DocTitleFour, CounterWithoutHook, CounterWithHook, UserFormWithoutHook, UserFormWithHook } from "./components/useCustomHooks"; // eslint-disable-line
import './App.css';

/*
 * Scenerio:                          UseState           vs    UseReducer
 * Type of State:               Number, String, Boolean   /   Object or Array
 * Number of State Transition:  One or Two                /   Too Many            (basically number of states)
 * Releated State Transition:   No                        /   Yes                 (basically if state values are related)
 * Business Logic:              No Business Logic         /   Complex Business Logic
 * Local vs Global:             Local                     /   Global 
 */

function App() {
  return (
    <div className="App">
      { /* ======================================== custom Hook (Alternative to HOC & Render Props) */ }
      <DocTitleOne />   { /* exact same code */ }
      <DocTitleTwo />   { /* exact same code */ }
      <DocTitleThree /> { /* exact same code but using custom hook */ }
      <DocTitleFour />  { /* exact same code but using custom hook */ }
      <CounterWithoutHook />
      <CounterWithHook />
      <UserFormWithoutHook />
      <UserFormWithHook />
      <hr className="big-seperator" />
      { /* ======================================== useRef Hook (access DOM nodes directly in functional components) */ }
      <FocusInputuseRef />
      <ClassTimer />          {/* Interval Timer using Class */ }
      <HookTimer />
      <hr className="big-seperator" />
      { /* ======================================== useMemo Hook - Memo simply cache functions which takes very long time to update and only update when value changes. This is to prevent lagging in re-rendering even though value did not change for the state, since all components are re-rendered when setState is called */ }
      <MemoCounter /> 
      <hr className="big-seperator" />
      { /* ======================================== useCallBack Hook */ }
      <ParentComponentCallBack />         { /* Every single component is re-rendered when the button is clicked */ }
      <ParentComponentCallBackWithMemo /> { /* More optimized by using useMemo & useCallback */ }
      <hr className="big-seperator" />
      { /* ======================================== useReducer */ }
      <CounterOne />      { /* Local State Management - Simple State and Action */}
      <CounterTwo />      { /* Local State Management - Object */}
      <CounterThree />    { /* Local State Management - Multiple useReducer */}
      <ComponentA3 />     { /* Golbal State Management - useReducer + useContext */}
      <DataFetchingOne /> { /* Data Fetching with useState */}
      <DataFetchingTwo /> { /* Data Fetching with useReducer */}
      <hr className="big-seperator" />
      { /* ======================================== Use Context (Multiple values) - pass value from parent component to child component */ }
      <ChannelContext.Provider value="NEW CONTEXT">
        <ChannelContext2.Provider value="CO TEXT">
          <ComponentA1 />
        </ChannelContext2.Provider>
      </ChannelContext.Provider>
      <hr className="big-seperator" />
      { /* ======================================== Data Fetching */ }
      <DataFetching />
      <hr className="big-seperator" />
      { /* ======================================== UseEffects Hooks () */ }
      <h1>Look at the document.title (on web browser tabs)</h1>
      <ClassCounterEffects />   { /* Side Effects (CLASS STYLE) */}
      <HookCounterEffects />    { /* Basic UseEffects() */}
      <HookCounterEffectsV2 />  { /* Conditionally Run UseEffects() */}
      <ClassMouse />            { /* Class with effects that runs only once (CLASS STYLE) */}
      <HookMouse />             { /* UseEffects() that runs only once */}
      <MouseContainer />        { /* UseEffects() with cleanup */}
      <IntervalClassCounter />
      <IntervalHookCounter />   { /* UseEffects() with incorrect dependency */}
      <hr className="big-seperator" />
      { /* ======================================== UseStates Hooks () */ }
      <ClassCounter />  { /* States using Class (no hooks) */}
      <HookCounter />   { /* Basic Hook example */}
      <HookCounterV2 /> { /* Hook with prev state */}
      <HookCounterV3 /> { /* Hook with Object */}
      <HookCounterV4 /> { /* Hook with Array */}
      <hr className="big-seperator" />
      { /* ========================================  Context */ }
      <UserProvider value="Context Lah">
        <ComponentA />
      </UserProvider>
      <hr className="big-seperator" />
      { /* ========================================  Render Props (similar concept to HOC) */ }
      <User render={(isLoggedIn) => isLoggedIn ? "User" : "Guest" } />
      <RenderCounter render={(count, incrementCount) => (
        <ClickCounterV2 count={count} incrementCount={incrementCount} />
      )} />
      <RenderCounter render={(count, incrementCount) => (
        <HoverCounterV2 count={count} incrementCount={incrementCount} />
      )} />
      <hr className="big-seperator" />
      { /* ========================================  Higher Order Components (HOC) -- sharing common functionalites between components eg. click counter */ }
      <ClickCounter />          { /* Before */}
      <HoverCounter />
      <EnhancedClickCounter />  { /* After */}
      <EnhancedHoverCounter />
      <hr className="big-seperator" />
      { /* ========================================  Error Boundary */ }
      {/* <HeroDemo /> */}
      <hr className="big-seperator" />
      { /* ========================================  Portal */ }
      <Portal />
      <hr className="big-seperator" />
      { /* ========================================  Refs (use to get reference to a DOM / component) -- avoid using ref for anything that can done declaratively */ }
      <RefsDemo />
      <FocusInput />
      <FRParentInput />
      <hr className="big-seperator" />
      { /* ========================================  Pure Components / Memo Components */ }
      {/* <ParentComp /> */}
      <hr className="big-seperator" />
      { /* ========================================  Fragments */ }
      {/*<FragmentDemo />
      <Table /> */}
      <hr className="big-seperator" />
      { /* ======================================== Component Life Cycle */ }
      { /* <LifeCycleA /> { /* Mounting / Updating */ }
      <hr className="big-seperator" />
      { /* ======================================== Form Handling */ }
      <Form />
      <hr className="big-seperator" />
      { /* ======================================== CSS Styling */ }
      <StyleSheet primary={true} />
      <Inline />
      <ModuleStyleSheet />
      <hr className="big-seperator" />
      { /* ======================================== List Rendering */ }
      <NameList />
      <PersonNameList />
      <hr className="big-seperator" />
      { /* ======================================== Condition Rendering */ }
      <UserGreeting1 /> { /* If / Else */}
      <UserGreeting2 /> { /* ELement Variables : using variable that stores element to be render */}
      <UserGreeting3 /> { /* Ternary Conditional Operator */}
      <UserGreeting4 /> { /* Short circuit operator */}
      <hr className="big-seperator" />
      { /* ======================================== Communication between parent and child component */ }
      <ParentComponent />
      <hr className="big-seperator" />
      { /* ======================================== Event Handling / On Click Events */ }
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <hr className="big-seperator" />
      { /* ======================================== Deconstructing Props & States */ }
      <GreetProps2A />
      <GreetProps2B />
      <WelcomeProps2 />
      <hr className="big-seperator" />
      { /* ======================================== Understanding States */ }
      <Message />
      <Counter />
      <hr className="big-seperator" />
      { /* ======================================== Understanding Props */ }
      <GreetProps name="Bruce" />       { /* Props in Functions */}
      <GreetProps name="Winnie">        
        <button>Bad Person</button>
      </GreetProps>
      <GreetProps name="Chloe" />       
      <WelcomeProps name="Joker" />     { /* Props in Class */}
      <hr className="big-seperator" />
      { /* ======================================== Introducing JSX */ }
      <HelloReact />
      <HelloJSX />
      <hr className="big-seperator" />
      { /* ======================================== Demostrating Functional and Class Component Difference */ }
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
