const App = () => {
  //Non-parameterized function
  const handle = () => {
    alert("Hello World");
  };
  //Parameterized function
  const handleParam = (msg) => {
    alert(msg);
  };
  // const wrapperHandleParam = () => handleParam("Hellllllllllo WWWWWWsorllllllld");

  return (
    <>
      <h1>Hello World</h1>
      <p>This is a simple React application.</p>
      <p>Welcome to the world of React!</p>
      <button onClick={handle}>Click</button>
      <button onClick={() => handleParam("Hellllllllllo WWWWWWsorllllllld")}>Click(PAram)</button>
    </> //frangment or empty tag
  );
};

export default App;

//A function component will always return HTML ,JSX or null
//We can not write anything after return
//We can only return single data/entity/variable/value
//There must be Single Return in a fuction and that must be the last statement
//We can not write anything after return
//We can not write anything after return
