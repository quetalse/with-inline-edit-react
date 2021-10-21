import InlineEdit from "inline-edit-react";
import logo from './logo.png';
import './App.css';

console.log('InlineEdit', InlineEdit)

const Title = ({title, asyncEditHandler}) => {

        console.log(title, asyncEditHandler)

        let onSuccess = () => {
            alert('ok');
        };

        let onFail = (err) => {
            alert(`error: ${err}`);
        }

        let onEdit = (newTitle) => {
            asyncEditHandler(newTitle)
        }
 
        return (
            <InlineEdit 
                initTitle = {title}
                onEdit = {asyncEditHandler}
                onSuccess = {onSuccess}
                onFail = {onFail}
                align = 'center' // ['left', 'center', 'right']
            >
            </InlineEdit>
        )
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{filter: 'invert(100%)'}}/>
        <p>
          Edit <i>title</i> below to test.
        </p>
          <p style={{marginTop: '30px', width: '400px'}}>
              <Title  title="inline-edit-react" asyncEditHandler={(title) => {console.log(title)}}/>
          </p>
      </header>
    </div>
  );
}

export default App;
