import styled from 'styled-components';

export const WrapperHeader = styled.section`
  background: #fafafa;
  padding: 0.5rem 1rem;
  margin: 0;
`;

export const HeaderComponent = styled.header`
  display: grid;
  grid-template-columns: 150px 2fr;
  align-items: center;
`;

export const TopBar = styled.div`
  background: var(--color-black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
`;

export const Contact = styled.div`
  padding-left: 1rem;
  svg {
    color: var(--color-blue);
    margin-right: 5px;
  }
  a {
    margin: 0 0.8rem;
    text-decoration: none;
  }

  @media screen and (max-width: 596px) {
    .is--hide {
      display: none;
    }
  }
`;
export const Language = styled.div`
  padding: 1rem;
  background: var(--color-blue);
  a {
    text-decoration: none;
  }
`;
