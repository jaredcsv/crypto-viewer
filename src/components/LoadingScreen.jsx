import "/src/styles/components/LoadingScreen.css"

function LoadingScreen() {
  return (
    <>
      <div className="loading-screen_container">
          <img className="loading-screen" src="/src/assets/animations/loading-screen.gif" alt="" />
      </div>
    </>
  );
}

export default LoadingScreen;
