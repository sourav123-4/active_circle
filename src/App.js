
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState({
    active1: true,
    active2: false,
    active3: false,
    active4: false,
  });
  const [count, setCount] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count: 0,
  });
  console.log("count", count);
  useEffect(() => {
    if (count.count3 > 0 && count.count3 % 10 === 0) {
      setCount({ ...count, count: count.count + 1 });
    }
  }, [count.count3]);

  return (
    <div className="App">
      <div className="main-circle-1">
        {active.active1 ? (
          <div
            className="circle1"
            onClick={() => {
              if (count.count % 2 !== 0){
                if(count.count1 % 2 === 0){
                  setActive({ ...active, active1: false, active4: true });
                  setCount({ ...count, count1: count.count1 + 1 });
                }else{
                  setActive({ ...active, active1: false, active3: true });
                  setCount({ ...count, count1: count.count1 + 1 });
                }
              }else{
                if(count.count1 % 2 === 0){
                  setActive({ ...active, active1: false, active2: true });
                  setCount({ ...count, count1: count.count1 + 1 });
                }else{
                  setActive({ ...active, active1: false, active3: true });
                  setCount({ ...count, count1: count.count1 + 1 });
                }
              }
            }}
          ></div>
        ) : (
          <div className="circle"></div>
        )}
        {active.active2 ? (
          <div
            className="circle1"
            onClick={() => {
              if (count.count % 2 !== 0) {
                if(count.count2 % 2 === 0){
                  setActive({ ...active, active2: false, active1: true });
                  setCount({ ...count, count2: count.count2 + 1 });
                }else{
                  setActive({ ...active, active2: false, active4: true });
                  setCount({ ...count, count2: count.count2 + 1 });
                }
              } else {
                if(count.count2 % 2 === 0){
                  setActive({ ...active, active2: false, active4: true });
                setCount({ ...count, count2: count.count2 + 1 });
                }else{
                  setActive({ ...active, active2: false, active3: true });
                setCount({ ...count, count2: count.count2 + 1 });
                }
                
              }
            }}
          ></div>
        ) : (
          <div className="circle"></div>
        )}
      </div>
      <div className="main-circle-2">
        {active.active4 ? (
          <div
            className="circle1"
            onClick={() => {
              if (count.count % 2 !== 0) {
                if(count.count4 % 2 === 0){
                  setActive({ ...active, active4: false, active2: true });
                  setCount({ ...count, count4: count.count4 + 1 });
                }else{
                  setActive({ ...active, active4: false, active3: true });
                  setCount({ ...count, count4: count.count4 + 1 });
                }
              } else {
                if(count.count4 % 2 === 0){
                  setActive({ ...active, active4: false, active1: true });
                  setCount({ ...count, count4: count.count4 + 1 });
                }else{
                  setActive({ ...active, active4: false, active2: true });
                  setCount({ ...count, count4: count.count4 + 1 });
                }
                
              }
            }}
          ></div>
        ) : (
          <div className="circle"></div>
        )}
        {active.active3 ? (
          <div
            className="circle1"
            onClick={() => {
              if (count.count % 2 !== 0) {
                if(count.count3 % 2 === 0){
                  setActive({ ...active, active3: false, active2: true });
                  setCount({ ...count, count3: count.count3 + 1 });
                }else{
                  setActive({ ...active, active3: false, active1: true });
                  setCount({ ...count, count3: count.count3 + 1 });
                }
              } else {
                if(count.count3 % 2 === 0){
                  setActive({ ...active, active3: false, active4: true });
                  setCount({ ...count, count3: count.count3 + 1 });
                }else{
                  setActive({ ...active, active3: false, active1: true });
                  setCount({ ...count, count3: count.count3 + 1 });
                }
              }
            }}
          ></div>
        ) : (
          <div className="circle"></div>
        )}
      </div>
    </div>
  );
}

export default App;
