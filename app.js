//TASK 1 : TO CREATE H1 TAG AND GIVE ID TO IT AND THEN APPLY CSS AND IMPORT THE CSS FILE.

// const heading1 = React.createElement('h1', {
//     id: 'heading'
// }, 'Hello World from React');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading1);

//TASK 2: TO CREATE NESTED STRUCTURE
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//     </div>
// </div>

const parent = React.createElement('div', {id:'parent'}, React.createElement('div', {id: 'child'}, [React.createElement('h1', {}, 'I am h1 tag'), React.createElement('h1', {}, 'I am h2 tag') ]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);


