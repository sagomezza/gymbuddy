import * as React from 'react';
import ModalInfo, { IBaseModalProps } from './ModalInfo';

const ErrorModal = (props: IBaseModalProps) => {
  const {
    actionOnPress,
    actionText,
    onClose,
    subtitle,
    title,
    visible,
  } = props;

  return (
    <ModalInfo
      actionOnPress={actionOnPress}
      actionText={actionText}
      emphasis="ERROR"
      onClose={onClose}
      subtitle={subtitle}
      title={title}
      visible={visible}
    />
  );
};

export default ErrorModal;