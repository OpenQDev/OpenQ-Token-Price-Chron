const axios = require('axios');

const fetchCoingeckoPrices = async (pricingMetadata) => {
	console.log(pricingMetadata)
	const network = 'polygon-pos';
	const commaDelimitedTokenAddresses = pricingMetadata.map((metadata) => metadata.address).join(',');
	
	let url = `https://api.coingecko.com/api/v3/simple/token_price/${network}?contract_addresses=${commaDelimitedTokenAddresses}&vs_currencies=usd`;
  if (process.env.COINGECK_API_KEY) {
    url = `https://pro-api.coingecko.com/api/v3/simple/token_price/${network}?contract_addresses=${commaDelimitedTokenAddresses}&vs_currencies=usd&x_cg_pro_api_key=${process.env.COINGECK_API_KEY}`;
  }

	const { data } = await axios.get(url);
	const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174';
	const usdtPrice = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
	if(data[usdcAddress]) data[usdcAddress] =  { usd: 1 };
	if( data[usdtPrice]) data[usdtPrice] =  { usd: 1 };
	console.log(data, "my data")
	return  data
};

module.exports = fetchCoingeckoPrices;