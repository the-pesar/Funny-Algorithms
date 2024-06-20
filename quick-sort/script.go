package main

func QuckSort(array []int) []int {

	if len(array) < 2 {
		return array
	}

	var pivot = array[0]
	var smaller []int
	var greater []int

	for i := 1; i < len(array); i++ {
		if array[i] <= pivot {
			smaller = append(smaller, array[i])
		} else {
			greater = append(greater, array[i])
		}
	}

	var sorted = QuckSort(smaller)
	sorted = append(sorted, pivot)
	sorted = append(sorted, QuckSort(greater)...)

	return sorted
}
