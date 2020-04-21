import React, { ReactNode } from 'react'
import { MainContainer } from '../../containers/containers.css'
import Header from '../../components/header/header'

interface IMainPageProps {}
interface IMainPageState {}

class MainPage extends React.Component<IMainPageProps, IMainPageState> {

    render(): ReactNode {
        return (
            <MainContainer>
                <Header />
            </MainContainer>
        )
    }
}

export default MainPage
