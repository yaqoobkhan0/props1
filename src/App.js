import Color from "./Components/Color";

function App() {
  const styling = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  return (
    <>
      <div style={styling}>
        <Color title="#FF6663" color="PINK" code="#FF6663" />
        <Color title="#333333" color="GRAY" code="#333333" />
        <Color title="#000000" color="BLACK" code="#000000" />
        <Color title="#38BB14" color="GREEN" code="#38BB14" />
        <Color title="#C90B0B" color="RED" code="#C90B0B" />
      </div>

      <div style={styling}>
        <Color title="#FF8000" color="ORANGE" code="#FF8000" />
        <Color title="#FFF500" color="YELLOW" code="#FFf500" />
        <Color title="#CCCCCC" color="LIGHT-GRAY" code="#CCCCCC" />
        <Color title="#7E41A2" color="PURPLE" code="#7E41A2" />
        <Color title="#C14911" color="BROWN" code="#C14911" />
      </div>
    </>
  );
}

export default App;