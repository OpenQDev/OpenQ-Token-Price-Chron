const axios = require('axios');

const fetchCoingeckoPrices = async (pricingMetadata) => {
	const network = 'polygon-pos';
	const commaDelimitedTokenAddresses = pricingMetadata.map((metadata) => metadata.address).join(',');
	const url = `https://api.coingecko.com/api/v3/simple/token_price/${network}?contract_addresses=${commaDelimitedTokenAddresses}&vs_currencies=usd`;
	const { data } = await axios.get(url);
	return  { ...data, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174': { usd: 1 } };
};

module.exports = fetchCoingeckoPrices;