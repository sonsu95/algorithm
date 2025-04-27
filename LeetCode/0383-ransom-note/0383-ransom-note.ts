function canConstruct(ransomNote: string, magazine: string): boolean {
    for (let i = 0; i < magazine.length; i ++) {
        if (ransomNote.includes(magazine[i])) {
            ransomNote = ransomNote.replace(magazine[i], '');
        }
    }

    return !ransomNote.length;
};