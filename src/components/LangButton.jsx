import { Button } from '@mui/material';

function LangButton({lang, setLang}) {
  return (
    <Button
    onClick={() => {
      if(lang === "ar"){
        setLang("en")
      }else {
        setLang("ar")
      }
    }}
      sx={{
        color: 'white',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        right: 230,
      }}
    >
      {lang === "ar" ? "أنجليزي": "arabic"}
    </Button>
  );
}

export default LangButton;
