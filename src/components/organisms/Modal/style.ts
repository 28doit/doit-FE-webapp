import styled from 'styled-components';

export const ModalLoginOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalLoginInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 450px;
  width: 90%;
  padding: 50px 35px 40px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 30px;
`;

export const ModalJoinOverlay = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalJoinInner = styled.div`
  max-width: 600px;
  width: 90%;
  padding: 30px 20px;
  background: #fff;
  margin: 50px;
  border-radius: 30px;
`;

export const EditProfileOverlay = styled.div`
  width: 90%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditProfileInner = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 30px 20px;
  background: #fff;
  margin: 50px;
  border-radius: 30px;
`;
