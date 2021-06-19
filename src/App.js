import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Home } from './components/Home'
import { Search } from './components/Search'
import './App.css'

const client = new ApolloClient({
  
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache
})



const App = () => {
  return (
   <ApolloProvider client = {client}>
   <div className="App">
     <Router>
       <Switch>
         <Route path = '/' exact component = {Home} />
         <Route path = '/search' component = {Search} />
       </Switch>
     </Router>
    </div>
    </ApolloProvider>
  );
  
}

export default App;
