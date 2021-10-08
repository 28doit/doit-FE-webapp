import { BaseTemplate } from '../../templates';
import { LoginItemModal, RePasswordModal } from '../../components/index';

export const NewLoginForm = () => {
  return (
    <BaseTemplate>
      <LoginItemModal />
    </BaseTemplate>
  );
};

export const RePasswordForm = () => {
  return (
    <BaseTemplate>
      <RePasswordModal />
    </BaseTemplate>
  );
};
