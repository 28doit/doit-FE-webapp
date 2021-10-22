import { BaseTemplate } from '../../templates';
import { ModalLoginItem, ModalRePasswordItem } from '../../components/index';

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
