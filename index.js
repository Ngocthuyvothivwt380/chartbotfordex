const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

bot.command('/chart', async (ctx) => {
  const tokenSymbol = ctx.message.text.split(' ')[1];
  if (!tokenSymbol) {
    return ctx.reply('Please specify a token symbol (e.g., /chart UNI)');
  }

  const chartData = await fetchUniswapChartData(tokenSymbol);
  const chartMessage = prepareChartMessage(chartData);
  ctx.reply(chartMessage);
});

async function fetchUniswapChartData(tokenSymbol) {
  const coingeckoApiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tokenSymbol}&market_id=uniswap_v2`;
  const response = await axios.get(coingeckoApiUrl);
  const data = response.data[0].market_data.price_chart; // Assuming price chart data structure
  const chartData = data.map(item => ({ timestamp: item[0], price: item[1] }));
  return chartData;
}

function prepareChartMessage(chartData) {
  // Implement your logic here to process or format chart data (text or potentially chart image using chart.js)
  // ...
  const message = 'Your Uniswap chart data is ready!'; // Replace with formatted data
  return message;
}

bot.launch();
