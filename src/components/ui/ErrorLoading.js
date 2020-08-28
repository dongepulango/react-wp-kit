import React from 'react';
//styles
import styled from 'styled-components';

//styled
const ErrorLoadingWrap = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorLoading = () => {
  return (
    <ErrorLoadingWrap>
      <p>Error Loading</p>
    </ErrorLoadingWrap>
  );
};

export default ErrorLoading;