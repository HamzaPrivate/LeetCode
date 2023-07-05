/**
 * 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 */

function maxProfit(prices: number[]): number {
    if(!prices || prices.length<2) return 0;
    let bought = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        const p = prices[i];
        if(p<bought){
            bought = p;
        }
        profit = Math.max(p-bought , profit);
    }
    return profit;
}

console.log(maxProfit([3,3,5,0,0,3,1,4]));//[3,3,5,0,0,3,1,4] needs to return 4
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));//2
console.log(maxProfit([3, 2, 6, 5, 0, 3]));//[3,2,6,5,0,3]needs to return 4
console.log(maxProfit([2, 4, 1]));//[2,4,1] needs to return 2   
console.log(maxProfit([1, 2]));//[1,2] needs to return 1
console.log(maxProfit([2, 1, 4]));//[2,1,4] needs to return 3