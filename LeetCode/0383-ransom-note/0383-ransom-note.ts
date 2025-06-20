function canConstruct(ransomNote: string, magazine: string): boolean {
    for (const char of magazine) {
        if (ransomNote.includes(char)) {
            ransomNote = ransomNote.replace(char, '');
        }
    }
    console.log('ransomNote', ransomNote);

    return !ransomNote
};