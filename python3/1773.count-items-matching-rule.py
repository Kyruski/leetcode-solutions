class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        key = 0 if ruleKey == "type" else 1 if ruleKey == "color" else 2
        return len([item for item in items if item[key] == ruleValue])
