import styled from "styled-components";

export const Arrow = styled.div`
    left: ${props => props.direction === 'left' && '0px'} ;
    right: ${props => props.direction === 'right' && '0px'} ;
`;

export const Content = styled.div`
    background-color: #${props => props.bg} ;
`
export const Wrapper = styled.div`
    transform: translateX(${(props) => props.slideShow * -100}vw);
`;