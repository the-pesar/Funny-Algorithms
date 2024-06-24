package main

import "fmt"

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	var sMap, tMap = make(map[byte]int, 26), make(map[byte]int, 26)

	for i := 0; i < len(s); i++ {
		sMap[s[i]] += 1
		tMap[t[i]] += 1
	}

	for k := range sMap {
		if sMap[k] != tMap[k] {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println(isAnagram("anagram", "na1aram"))
}
