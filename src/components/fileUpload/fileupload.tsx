import React, { FC, ChangeEvent } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { mergeAndDownloadPDFs } from '../../helpers/merge-and-download';


interface Props {
  className?: string;
  placeholder?: string;
  text?: string;
  value?: string;
  fileFormats: string;
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FileUpload: FC<Props> = ({
  className,
  placeholder,
  text,
  value,
  fileFormats,
}) => {
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    await mergeAndDownloadPDFs(files);
  };
  return (
    <Button
      className={className}
      color="primary"
      variant="contained"
      component="label"
      startIcon={<CloudUploadIcon />}
    >
      {text || ''}
      <VisuallyHiddenInput
        type="file"
        accept={fileFormats}
        onChange={handleFileChange}
        multiple
      />
    </Button>
  );
};

export default FileUpload;
