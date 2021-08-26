import React from 'react';
import {
  Dialog,
  IconButton,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { useStylesSignIn } from '../pages/SignIn';

import CloseIcon from '@material-ui/icons/Close';

interface ModalBlockProps {
  title?: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>;
  visible?: boolean;
  onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  onClose,
  visible = false,
  classes,
  children,
}: ModalBlockProps): React.ReactElement | null => {
  if (!visible) {
    return null;
  }
  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog">
      <DialogTitle id="form-dialog-title">
        <IconButton
          onClick={onClose}
          color="secondary"
          aria-label="close"
          // className={classes.margin}
        >
          <CloseIcon color="secondary" style={{ fontSize: 26 }} />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
