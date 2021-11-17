import { BaseTemplate } from '../../templates';
import {
  ModalLoginItem,
  ModalRePasswordItem,
  ModalFindIdItem,
} from '../../components/index';

export const NewLoginForm = () => {
  return (
    <BaseTemplate>
      <ModalLoginItem />
    </BaseTemplate>
  );
};

export const RePasswordForm = () => {
  return (
    <BaseTemplate>
      <ModalRePasswordItem />
    </BaseTemplate>
  );
};

export const FindIdForm = () => {
  return (
    <BaseTemplate>
      <ModalFindIdItem />
    </BaseTemplate>
  );
};
