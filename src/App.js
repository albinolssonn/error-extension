import "./App.css";
import IndexPage from "./components/IndexPage";

function App() {
  return (
    <div className="App">
      <div className="extenstion-section">
        <IndexPage />
      </div>
    </div>
  );
}

export default App;

{
  // Icke fungerande...
  /* <div className="extenstion-section">
        {user ? (
          <>
            {isLoading ? (
              <LoadingPage />
            ) : (
              <>
                {result ? (
                  <OutPutPage
                    result={result}
                    copyResultFunction={copyResultFunction}
                    resetFunction={resetFunction}
                  />
                ) : (
                  <InputPage
                    setInput={setInput}
                    OpenAIFetch={OpenAIFetch}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <>
            <SignPage />
          </>
        )}
      </div> */
}

{
  // Fungerande
  /* <div className="extenstion-section">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            {result ? (
              <OutPutPage
                result={result}
                copyResultFunction={copyResultFunction}
                resetFunction={resetFunction}
              />
            ) : (
              <InputPage
                setInput={setInput}
                OpenAIFetch={OpenAIFetch}
              />
            )}
          </>
        )}
      </div> */
}
