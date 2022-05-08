import styled from '@emotion/styled';
import { cover } from 'polished';

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const StyledImageWrapper = styled.div`
  ${cover()}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const S = {
  StyledWrapper,
  StyledImageWrapper,
};

export default S;
