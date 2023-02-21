import React from 'react';
import ReactDOM from 'react-dom';
import { Divider, Pagination } from 'rsuite';
import "rsuite/dist/rsuite.css";
import * as S from './style'
function App() {
    const [activePage, setActivePage] = React.useState(5);

    return (
        <>
        <S.Container>
            <Pagination 
                prev
                next
                size="lg"
                total={125}
                limit={5}
                maxButtons={5}
                activePage={activePage}
                onChangePage={setActivePage} />
            </S.Container>
        <S.Container2>
        <Pagination 
                prev
                next
                size="lg"
                total={125}
                limit={3}
                maxButtons={3}
                activePage={activePage}
                onChangePage={setActivePage} />
        </S.Container2>
          
        </>
    );
}


export default App