import { ChakraProps } from "@chakra-ui/react";
import { chakra, useColorModeValue, useToken } from "@chakra-ui/system";

const BlenderLogo: React.FC<ChakraProps> = ({
  color,
  ...rest
}): JSX.Element => {
  const activeColor = color ? useToken("colors", color as string) : false;
  const accentColor = useColorModeValue("#265787", "white");
  return (
    <chakra.svg width="118px" height="32px" viewBox="0 0 118 32" {...rest}>
      <path
        d="M54.8733679,24.5919171 L58.0349016,24.5919171 C58.0501554,24.5919171 58.0501554,24.5919171 58.0501554,24.5766632 L58.0501554,11.3190466 C58.0501554,11.3037927 58.0501554,11.3037927 58.0349016,11.3037927 L54.8733679,11.3037927 C54.858114,11.3037927 54.858114,11.3037927 54.858114,11.3190466 L54.858114,24.5766632 C54.858114,24.5919171 54.858114,24.5919171 54.8733679,24.5919171 Z M79.799544,13.824 C77.8152124,13.824 76.7156062,14.4043109 75.3095959,15.5655959 C75.3095959,15.5655959 75.294342,15.550342 75.294342,15.5655959 C75.294342,15.4581554 75.3394404,14.7558135 75.2021554,14.7558135 C74.3320207,14.7558135 73.0334508,14.7253057 72.1023005,14.7558135 L72.1023005,24.5461554 C73.3080207,24.5614093 75.2936788,24.5461554 75.2936788,24.5461554 C75.3089326,22.6526839 75.3089326,20.5138238 75.3089326,18.497658 C75.4309637,17.6427772 76.2858446,16.3594611 78.485057,16.3594611 C80.0436062,16.2367668 80.4096995,17.4590674 80.4096995,18.8332435 L80.4096995,24.5454922 L83.5871503,24.5454922 C83.5871503,23.6906114 83.9227358,18.5281658 83.4637927,16.5730155 C82.9159793,14.1297409 80.5025492,13.8545078 79.799544,13.824 Z M41.3100104,10.4177409 L44.5783212,11.3037927 L44.5783212,14.9693679 C45.6429105,14.2962694 46.8775999,13.9412329 48.1371192,13.9460311 C51.4518549,13.9460311 54.1551088,16.3594611 54.1551088,19.3067772 C54.1551088,22.2547565 51.4518549,24.6681865 48.1371192,24.6681865 C46.8087047,24.6681865 45.5864041,24.3014301 44.5783212,23.6594404 L44.5783212,24.5607461 L41.3100104,24.5607461 L41.3100104,10.4177409 Z M47.6483316,16.4204767 C45.9684145,16.4204767 44.5935751,17.7336373 44.5935751,19.3837098 C44.5935751,21.0032746 45.9677513,22.346943 47.6483316,22.346943 C49.3587565,22.346943 50.7329326,21.0026114 50.7329326,19.3837098 C50.7329326,17.7336373 49.3587565,16.4204767 47.6483316,16.4204767 Z M97.1657617,10.4177409 L97.1657617,24.5614093 L93.8059275,24.5614093 L93.8211813,23.6753575 C92.8276891,24.3014301 91.6060518,24.6681865 90.3081451,24.6681865 C86.9934093,24.6681865 84.2901554,22.2547565 84.2901554,19.3067772 C84.2901554,16.3594611 86.9934093,13.9460311 90.3081451,13.9460311 C91.5648479,13.9441524 92.795426,14.3047597 93.8523523,14.9846218 L93.8662798,11.3037927 L97.1657617,10.4177409 Z M90.7969326,16.4204767 C89.1170155,16.4204767 87.7428394,17.7336373 87.7428394,19.3837098 C87.7428394,21.0026114 89.1170155,22.346943 90.7969326,22.346943 C92.5080207,22.346943 93.8821969,21.0032746 93.8821969,19.3837098 C93.8821969,17.7336373 92.5080207,16.4204767 90.7969326,16.4204767 Z M110.178653,19.9792746 C110.148808,16.1916684 108.667192,13.5799378 103.671876,13.7629845 C99.7317306,13.8545078 97.716228,15.8859275 97.7924974,19.5972642 C98.1121658,23.2323316 100.128995,24.3020933 103.473575,24.7902176 C106.361202,24.897658 108.391959,23.904829 109.07971,22.5299896 C108.330943,21.9954404 107.398466,21.5219067 106.664953,21.0026114 C105.855171,22.1327254 105.137575,22.7289534 103.915938,22.5452435 C101.777078,22.2242487 101.426238,21.2015751 101.349969,19.9945285 C104.207088,19.9945285 107.338114,19.9792746 110.178653,19.9792746 Z M101.48858,17.8868394 C101.67229,16.7872332 102.282446,15.8706736 104.024705,15.7486425 C105.581927,15.7486425 106.559503,16.6957098 106.559503,17.8868394 L101.48858,17.8868394 Z M71.2308394,19.9792746 C71.2009948,16.1916684 69.7193782,13.5799378 64.7240622,13.7629845 C60.7839171,13.8545078 58.7677513,15.8859275 58.8440207,19.5972642 C59.1643523,23.2323316 61.1811813,24.3020933 64.5257617,24.7902176 C67.4133886,24.897658 69.4441451,23.904829 70.1305699,22.5299896 C69.3519585,22.0259482 68.4818238,21.4920622 67.7171399,21.0026114 C66.9086839,22.1327254 66.1897617,22.7289534 64.9681244,22.5452435 C62.8292642,22.2242487 62.4784249,21.2015751 62.4021554,19.9945285 C65.2592746,19.9945285 68.3896373,19.9792746 71.2308394,19.9792746 Z M62.5401036,17.8868394 C62.7238135,16.7872332 63.3339689,15.8706736 65.0749016,15.7486425 C66.6334508,15.7486425 67.6110259,16.6957098 67.6110259,17.8868394 L62.5401036,17.8868394 Z M111.370446,24.5614093 L114.395358,24.5614093 C114.456373,24.5614093 114.487544,24.5614093 114.487544,24.5309016 L114.487544,18.5281658 C115.20514,17.1069016 116.41086,16.8018238 118.198881,16.8787565 L118.183627,14.1443316 C116.091855,14.220601 115.480373,14.4036477 114.488207,15.488 L114.488207,14.7551503 C114.488207,14.7246425 114.457036,14.7246425 114.396021,14.7246425 L111.371109,14.7246425 C111.310093,14.7246425 111.278922,14.7246425 111.278922,14.7551503 L111.278922,24.5302383 C111.278259,24.5614093 111.30943,24.5614093 111.370446,24.5614093 Z"
        fill={activeColor ? activeColor : accentColor}
        fillRule="nonzero"
      />
      <path
        d="M24.5546114,7.39349223 L9.02084974,7.39349223 C6.22540933,7.60704663 6.66843523,11.3336373 8.73036269,11.3037927 C10.6397513,11.273285 13.8470466,11.3037927 16.1225285,11.3037927 C12.8535544,14.389057 5.55291192,19.062715 2.36087047,22.1022176 C1.12331606,23.2780933 1.2002487,26.6996062 4.7895544,25.9050777 C6.1491399,25.1563109 12.2891606,20.1464041 13.1294508,19.2915233 C13.5572228,29.9374093 25.5315233,34.9320622 34.528,28.684601 C39.3084352,25.3546114 40.9585078,16.9238549 37.2166632,12.7694922 C34.2686839,9.47001036 28.8920207,6.17119171 22.461513,0.809782383 C21.4388394,-0.0298445596 18.368829,0.397264249 19.4067565,2.90221762 C19.4067565,2.90288083 22.1411813,5.6373057 24.5546114,7.39349223 Z M26.1277513,11.136 C30.5573472,11.136 34.1924145,14.4043109 34.1924145,18.3762902 C34.1924145,22.3774508 30.5573472,25.6159171 26.1277513,25.6159171 C21.6676477,25.6159171 18.0630881,22.3774508 18.0630881,18.3762902 C18.0630881,14.4043109 21.6676477,11.136 26.1277513,11.136 Z"
        fill={activeColor ? activeColor : "#e87d0d"}
        fillRule="nonzero"
      />
      <path
        d="M26.4102798,13.4724974 C29.1652642,13.4724974 31.412228,15.5888083 31.412228,18.1839585 C31.412228,20.7791088 29.1652642,22.8954197 26.4102798,22.8954197 C23.6552953,22.8954197 21.4083316,20.7791088 21.4083316,18.1839585 C21.4083316,15.5888083 23.6552953,13.4724974 26.4102798,13.4724974 Z"
        fill={activeColor ? activeColor : accentColor}
      />
    </chakra.svg>
  );
};

export default BlenderLogo;