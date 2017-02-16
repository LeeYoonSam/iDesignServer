import React from 'react';
import { Header, Game } from 'components';

class App extends React.Component {
    render(){

        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Game/>
                </div>
            </div>


        );
    }
}

export default App;
