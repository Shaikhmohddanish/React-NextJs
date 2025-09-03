const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


/*<div id="root">
        <div id="parent" class="parentClass">
            Parent tag
            <div class="child">
                Child tag
            </div>
            <div class="child2">
                child2 tag
            </div>
        </div>
    </div>
    */
const childDiv = React.createElement('div', {id:"child1", className:"child"}, 'Child tag');
const childDiv2 = React.createElement('div', {id:"child2", className:"child2"}, 'Child2 tag');
const parentDiv = React.createElement('div', {id:"parent", className:"parentClass"}, [childDiv, childDiv2]);
console.log(parentDiv);
root.render(parentDiv);