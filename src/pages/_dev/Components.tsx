import React from 'react';
import { Typography } from '@components';

export const Components = () => {
  return (
    <div style={{ width: '100%', minHeight: '100dvh', padding: 60 }}>
      <Typography variant='heading1'>Heading 1 - 60 Semibold</Typography>
      <Typography variant='heading2'>Heading 2 - 50 Semibold</Typography>
      <Typography variant='heading3'>Heading 3 - 40 Semibold</Typography>
      <Typography variant='heading4'>Heading 4 - 30 Semibold</Typography>
      <Typography variant='heading5'>Heading 5 -24 Semibold</Typography>
      <Typography variant='headline' weight='regular'>
        Headline - 20 Regular
      </Typography>
      <Typography variant='headline' weight='medium'>
        Headline - 20 Medium
      </Typography>
      <Typography variant='bodyL' weight='regular'>
        Body Large - 18 Regular
      </Typography>
      <Typography variant='bodyL' weight='medium'>
        Headline - 18 Medium
      </Typography>
      <Typography variant='body' weight='regular'>
        Body - 16 Regular
      </Typography>
      <Typography variant='body' weight='medium'>
        Body - 16 Medium
      </Typography>
      <Typography variant='footnote' weight='regular'>
        Footnote - 14 Regular
      </Typography>
      <Typography variant='footnote' weight='medium'>
        Footnote - 14 Medium
      </Typography>
      <Typography variant='caption' weight='regular'>
        caption - 13 Regular
      </Typography>
      <Typography variant='caption' weight='medium'>
        caption - 13 Medium
      </Typography>
      <Typography variant='small' weight='regular'>
        small - 13 Regular
      </Typography>
      <Typography variant='small' weight='medium'>
        small - 13 Medium
      </Typography>
    </div>
  );
};
