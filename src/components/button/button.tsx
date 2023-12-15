import React, { FC, ChangeEvent } from 'react';
import { Button } from '@mui/material';

interface Props {
    className?: string;
    placeholder?: string;
    text?: string;
    value?: string;
  }
  
  const MButton: FC<Props> = ({ className, placeholder, text, value }) => {
    return (    
    <Button color="primary" >
      {text || ''}
    </Button>
    )
  }

  export default MButton;