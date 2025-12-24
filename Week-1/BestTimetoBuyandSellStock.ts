function maxProfit(prices: number[]): number {
  /*
    Input: an array where the value of the index is the price of the stock and the index is the day
    Process: maximize profits by choosing a single day to buy day and choosing a different day to sell
    Output: a number with the max profit, 0 if the best you can do is not buy

    Solution 1: Brute force
    Try every possible pair of days with i < j where i is the buy day and j is the sell day
    track prices[j] - prices[i] and keep the max profit
    If there is no days return 0

    Solution 2:
    Scan the array from left to right, and keep track of minPrice and maxProfit
    we can calculate profits by doing profitToday = price - minPrice
    update the maxProfit if profitToday is bigger than maxProfit
    update minPrice if today's price is lower than what you've seen so far
    if there is no profit, return profit as 0 so that means you don't buy or sell

    SO, scan the prices once, and track the lowest price as the buy in, then moving left to right, track the profits and if the profits is better than the last day, track the maximum profit to be your sell day

    Steps:
    1. if prices.length is 0, return 0 immediately
    2. initialize minPrice = price[0] and maxProfit = 0 because if there is no profit, we return 0
    3. iterate from day 0 (prices[0]) to the end of the array
        - For each price at index i
            - check if potential profit = p - minPrice
            - if potential profit > maxProfit, update maxProfit = potential profit
            - if p < minPrice, update minPrice = p
    4. Return maxProfit

    As I move through the days, I keep track of the lowest price I've seen so far (the best buy), and at each step I check how much profit I'd make if I sold today

    */
  if (prices.length === 0) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;
  let potentialProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    potentialProfit = prices[i] - minPrice;
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }
  return maxProfit;

  /*
    Time complexity: O(n)
        - Loop through the array only once
        - Single pass over the prices and each day is constant time
    Space complexity: O(1)
        - storing minPrice, maxProfit, potentialProfit is a constant number of variables
    */
}
