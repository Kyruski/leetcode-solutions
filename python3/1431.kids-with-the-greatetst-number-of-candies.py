class Solution:
    
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandies = max(candies)
        return map(lambda kid: kid + extraCandies >= maxCandies, candies);