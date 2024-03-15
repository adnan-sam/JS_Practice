// Basic String Manipulation:

// 1) Reverse a String: Write a function that takes a string as input and returns a new string with the characters reversed. (e.g., "hello" -> "olleh")
function revString(str) {
    let reverse="";
    for(let i=str.length-1;i>=0;i--) {
        reverse+=str.charAt(i);
    }
    return reverse;
}

// console.log(revString("Adnan"))

// 2) Capitalize First Letter: Write a function that takes a string as input and returns a new string with the first letter capitalized and the rest lowercase. (e.g., "javascript" -> "Javascript")
function capitalizeStr(str) {
    const capStr = str.charAt(0).toUpperCase()+str.slice(1);
    return capStr;
}
// console.log(capitalizeStr("adnan"))

// 3) Count Vowels: Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string (case-insensitive).
function countVowels(str) {
    let vow=0,cons=0;
    for(let ch of str) {
        ch=ch.toUpperCase();
        if(ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U') {
            vow++;
        }
        else if(ch.charCodeAt()>=65 && ch.charCodeAt()<=90) {
            cons++;
        }
    }
    return {vow,cons};
}

// console.log(countVowels("aeiou dfghjk 2024"));

// 4) Extract a Substring: Write a function that takes a string, a starting index, and an ending index (optional) as input and returns the substring between those indices. (e.g., "pineapple", 4, 8 -> "apple")
function extractSubstr(str, start, end) {
    return str.substring(start,end+1);
}
// console.log(extractSubstr("adnan",1,3));

// 5) Replace All Occurrences: Write a function that takes a string, a search string, and a replacement string as input and returns a new string where all occurrences of the search string are replaced with the replacement string. (e.g., "JavaScript is awesome", "awesome", "great" -> "JavaScript is great")
function replaceAllOccurrences(str, target, replacement) {
    return str.replaceAll(target, replacement);
}
console.log(replaceAllOccurrences("he is so clever that he must study, so that he can make his parents feel proud", "he", "Adnan"));