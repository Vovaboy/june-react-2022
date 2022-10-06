import {Header,Users,Posts} from "./components";

const App = () =>{
  return(
      <div>
        <Header/>
        <div>
          <Users/>
          <Posts/>
        </div>
      </div>
  );
};

export {App};