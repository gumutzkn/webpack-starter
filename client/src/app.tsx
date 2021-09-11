import img from "./unknown.png";

// import "./app.scss";

import styles from "./app.module.scss";

const App = () => {
  return (
    <>
      {/* <img src={img} alt="logo" /> */}
      <h1 className={styles.hello}>
        React Typescript Webpack Starter Template
        <span className="title">Mahmut</span>
      </h1>
      ;
    </>
  );
};

export default App;
