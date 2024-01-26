import "./LoadingScreen.css"
import loadinganim from "/src/assets/animations/loading-screen.gif";

function LoadingScreen() {
  return (
    <>
      <div className="loading-screen_container">
          <img className="loading-screen" src={loadinganim} alt="" />
      </div>
    </>
  );
}

export default LoadingScreen;
