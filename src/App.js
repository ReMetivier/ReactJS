import './App.css';
import Treatment from './components/Treatment'

function App() {
   return (
     <form action='http://188.165.104.163/exam' method="POST">
      <Treatment />
    </form>
  );
}

export default App;
