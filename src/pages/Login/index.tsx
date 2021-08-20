import { BaseTemplate } from '../../templates';
import { LoginModal, RePassword } from '../../components/index';

export const NewLoginForm = () => {
  return (
    <BaseTemplate>
      <LoginModal />
    </BaseTemplate>
  );
};

export const RePasswordForm = () => {
  return (
    <BaseTemplate>
      <RePassword />
    </BaseTemplate>
  );
};
