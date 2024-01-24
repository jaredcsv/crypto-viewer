import "/src/styles/components/LoadingScreen.css"

function LoadingScreen() {
  return (
    <>
      <section className="loading-screen_container">
          <img className="loading-screen" src="/src/assets/animations/loading-screen.gif" alt="" />
      </section>
    </>
  );
}

export default LoadingScreen;
