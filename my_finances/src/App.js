import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header';
import { ListState } from './context/ListContext/ListState';
import { Create } from './Pages/Create';
import { List } from './Pages/List';
import { Operations } from './Pages/Operations';
import { Transactions } from './Pages/Transactions';

function App() {
  return (
    <ListState>
      <BrowserRouter>
        <Header />
        <div className="root">
          <Switch>
            <Route path={'/'} exact component={List} />
            <Route path={'/transact'} component={Transactions} />
            <Route path={'/create'} component={Create} />
            <Route path={'/opertions'} component={Operations} />
          </Switch>
        </div>
      </BrowserRouter>
    </ListState>
  );
}

export default App;
