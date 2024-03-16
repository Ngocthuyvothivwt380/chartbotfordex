**Uniswap Chart Telegram Bot with Node.js, Telegraf, and Coingecko**

This project provides a Node.js script to create a Telegram bot that retrieves and displays charts for tokens traded on Uniswap using Coingecko's API.

**Features**

* Fetches chart data for tokens on Uniswap via Coingecko API.
* Responds to user commands (e.g., `/chart UNI`).
* (Optional) Generates chart image using chart.js (not included in this example).

**Requirements**

* Node.js and npm installed.
* Telegram bot account and bot token.
* Free Coingecko account and API key.

**Installation**

1. Clone or download this repository.
2. Install required dependencies:

   ```bash
   npm install telegraf axios
   # Optional: npm install chart.js