// Імпорт бібліотек
import axios from "axios";

import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot("5631124800:AAHpwYmo5Ni_EN5WaX_PG_WJ4WPWD49rR6U", { polling: true });

const channelId = "@ebayJobs";

// Налаштування eBay
const apiKey = "v^1.1#i^1#f^0#p^3#I^3#r^0#t^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";
const apiSecret = "PRD-833b1855452a-585e-4363-ad6d-1b8e";


const seenListings = new Map();

// Функція для отримання нових лотів
async function getNewListings() {
  // Отримати список лотів, що відповідають пошуковому слову
  const url = "https://api.ebay.com/buy/browse/v1/item_summary/search";
  const params = {
    q: "iPhone 11",
    filter: 'buyingOptions:{FIXED_PRICE|BEST_OFFER}',
    filter: 'price:[10..50]'
    //maxPrice: 230,
  };
  const response = await axios({
    url,
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    params,
  });
  const listings = response.data.itemSummaries;
  console.log(listings.length)
  console.log(listings[0])

  // Відфільтрувати нові лоти
  const newListings = [];
  for (const listing of listings) {
    const listingId = listing.itemId;

    // Перевірити, чи лот вже був отриманий
    const seen = seenListings.get(listingId);
    if (!seen) {
      newListings.push(listing);
      seenListings.set(listingId, listing);
    }
  }

  return newListings;
}

// Основна програма
async function main() {
  // Запустити цикл, який постійно отримує нові лоти
  while (true) {
    // Отримати список нових лотів
    const newListings = await getNewListings();
    console.log(newListings);
    console.log(newListings.length)
    // Для кожного нового лота створити повідомлення для Telegram
    for (const listing of newListings) {
      // Створити повідомлення
      let message = `Новий лот на eBay: ${listing.title}`;
      message += `\nЦіна: ${listing.price.value}`;
      message += `\nПосилання: ${listing.itemWebUrl}`;
        console.log(message)
      // Відправити повідомлення
      try {
        await bot.sendMessage(channelId, message);    
      } catch (error) {
        console.log(error);
      }
    }

    // Зачекати хвилину
    await new Promise((resolve) => setTimeout(resolve, 60000));
  }
}

// Запустити програму
main();
