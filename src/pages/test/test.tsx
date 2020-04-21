import React, { ReactNode } from 'react'
import Header from '../../components/header/header'
import { MainContainer } from '../../containers/containers.css'

interface ITestPageProps {}
interface ITestPageState {}

class TestPage extends React.Component<ITestPageProps, ITestPageState> {

    render(): ReactNode {
        return (
            <MainContainer>
                <Header />
            </MainContainer>
        )
    }
}

export default TestPage
