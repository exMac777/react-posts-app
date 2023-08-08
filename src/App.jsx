import Index from './dashboard/Index';

// This is the root app component. This component will contain all the child components that will be
// rendered inside the application. In our case this app component has another Index component which is
// imported fro, dashboard directory
function App() {
  return (
    <>
      <Index />
    </>
  );
}

export default App;
