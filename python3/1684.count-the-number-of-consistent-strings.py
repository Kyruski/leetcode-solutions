class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        # return len([word for word in words if len(set(word) - set(allowed)) == 0])
        # return len([word for word in words if re.search(f'^[{allowed}]+$', word) != None])
        return sum(re.search(f'^[{allowed}]+$', word) != None for word in words)
