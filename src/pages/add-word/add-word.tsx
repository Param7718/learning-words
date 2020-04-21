import React, { ReactNode } from 'react'
import { MainContainer } from '../../containers/containers.css'
import Header from '../../components/header/header'

interface IAddWordPageProps {}
interface IAddWordPageState {}

class AddWordPage extends React.Component<IAddWordPageProps, IAddWordPageState> {

    render(): ReactNode {
        return (
            <MainContainer>
                <Header />
            </MainContainer>
        )
    }
}

export default AddWordPage
