package main

import "fmt"

func SelectionSort(array []int) []int {
	for i := 0; i < len(array); i++ {
		var min = array[i]
		var minIndex = i

		for j := i + 1; j < len(array); j++ {
			if array[j] < min {
				min = array[j]
				minIndex = j
			}
		}

		array[i], array[minIndex] = array[minIndex], array[i]
	}

	return array
}

func main() {
	fmt.Println(SelectionSort([]int{4, -2, 4, 9, 33, 20, 15, 23, -10, 0, 7}))
}
