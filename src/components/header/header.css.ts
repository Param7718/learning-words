import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    align-content: center;
`

export const HeaderBlock = styled.div`
    margin: 50px;
`

export const StyledLink = styled(Link)`
    font-size: 15px;
    color: #ffc821;

    :hover {
        color: #34d104;
    }
`