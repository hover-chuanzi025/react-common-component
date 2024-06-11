import React from 'react';
//凡是使用jsx的地方都必须要引入React 因为jsx代码需要使用React.createElement来转换为react元素
//在react17版本后不再需要
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const div = document.createElement('div');
const dov = <div>hello</div>
console.dir(div)
console.dir(dov)
