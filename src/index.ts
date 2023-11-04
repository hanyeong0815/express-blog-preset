import app from './app';

const PORT = parseInt(process.env.PORT ?? '5000');

app.listen(PORT, () => {
  console.log(`Listenning port ${PORT}`);
});
