import React from 'react';
import { Header, Game, GridContents, ImageList } from 'components';

class App extends React.Component {
    render(){

        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <ImageList/>
                </div>
                <div>
                    <GridContents/>
                </div>
                <div>
                    <Game/>
                </div>
            </div>


        );
    }
}

export default App;
