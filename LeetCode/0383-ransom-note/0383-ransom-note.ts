function canConstruct(ransomNote: string, magazine: string): boolean {
    const charCountMap = new Map<string, number>();

    for (const char of magazine) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        const count = charCountMap.get(char) || 0;
        if (!count) return false;
        charCountMap.set(char, count - 1);
    }

    return true;
};