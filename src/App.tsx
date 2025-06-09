import "./App.css";

function App() {
  return (
    <>
      <div className="test">
        <h3>block</h3>
        <div className="block">
          <p>block1</p>
          <p>block2</p>
        </div>
        <hr />
        <h3>inline</h3>
        <div className="inline">
          <p>inline1</p>
          <p>inline2</p>
        </div>
        <hr />
        <h3>flex</h3>
        <div className="flex">
          <p>flex1</p>
          <p>flex2</p>
        </div>
        <hr />
        <h3>inline-flex</h3>
        <div className="inline-flex">
          <p>inline-flex1</p>
          <p>inline-flex2</p>
        </div>
        <h3>inline-block</h3>
        <div className="inline-block">
          <p>inline-flex1</p>
          <p>inline-flex2</p>
        </div>
        <hr />
        <h3>grid</h3>
        <div className="grid">
          <p>grid1</p>
          <p>grid2</p>
        </div>
        <hr />
        <h3>none</h3>
        <div className="none">
          <p>none1</p>
          <p>none2</p>
        </div>
        <hr />
      </div>
    </>
  );
}

export default App;
