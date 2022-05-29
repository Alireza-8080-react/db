import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <>
      <Typography variant='h1'>404</Typography>
      <br />
      <Typography variant='h6'>صفحه رو نتونستم پیدا کنم</Typography>
      <br />
      <Button
        variant='contained'
        onClick={() => {
          router.push('/');
        }}
      >
        برو به صفحه اصلی
      </Button>
    </>
  );
};

export default NotFoundPage;
