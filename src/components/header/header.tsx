import React, { ReactNode } from 'react'
import { HeaderBlock, HeaderContainer, StyledLink } from './header.css'


class Header extends React.Component {

    render(): ReactNode {
        return (
            <HeaderContainer>
                {this.renderStyledLinks()}
            </HeaderContainer>
        )
    }


    /*
    * Тексты и адресы для ссылок
    */
    private links: Array<{ text: string, to: string }> = [
        { text: 'Тест', to: '/test' },
        { text: 'Проверка', to: '/exam' },
        { text: 'Добавить слово', to: '/add-word' },
        { text: 'Словарь', to: '/dictionary' },
        { text: 'Статистика', to: '/statistic' },
    ]

    private renderStyledLinks(): ReactNode {
        return (this.links.map((link, index) => (
            <HeaderBlock key={index}>
                <StyledLink to={link.to}>{link.text}</StyledLink>
            </HeaderBlock>
        )))
    }
}

export default Header
