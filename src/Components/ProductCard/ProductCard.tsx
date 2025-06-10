import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { formatPrice, type CurrencyType } from "./helpers/getLocale";

type Props = {
  title: string;
  originCountry: string;
  price: number;
  currencyType?: CurrencyType;
  image: string;
}

function ProductCard(props: Props) {
  const { title, originCountry, price, currencyType = 'RUB', image } = props;

  const formattedPrice = React.useMemo(() => formatPrice(price, currencyType), [price, currencyType]);

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} from {originCountry}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {formattedPrice}{currencyType}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default React.memo(ProductCard);
