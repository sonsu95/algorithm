function canConstruct(ransomNote: string, magazine: string): boolean {
    let copy = ransomNote;
    
    for (let i = 0; i < magazine.length; i ++) {
        if (copy.includes(magazine[i])) {
            copy = copy.replace(magazine[i], '');
        }
    }

    return !copy.length;
};