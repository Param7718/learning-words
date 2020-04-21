import React, { ReactNode } from 'react'
import { MainContainer } from '../../containers/containers.css'
import Header from '../../components/header/header'

interface IExamPageProps {}
interface IExamPageState {}

class ExamPage extends React.Component<IExamPageProps, IExamPageState> {
    

    render(): ReactNode {
        return (
            <MainContainer>
                <Header />
            </MainContainer>
        )
    }
}

export default ExamPage
