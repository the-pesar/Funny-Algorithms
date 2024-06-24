package main

func containsDuplicate(nums []int) bool {
	var list = make(map[int]bool, len(nums))

	for _, v := range nums {
		if exists := list[v]; exists {
			return true
		}
		list[v] = true
	}

	return false
}
