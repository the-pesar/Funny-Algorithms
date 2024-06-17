package main

import "fmt"

func BubbleSort(array []int) []int {

	for i := 0; i < len(array)-1; i++ {

		var swaped = false
		for j := 0; j < len(array)-i-1; j++ {

			if array[j] > array[j+1] {

				array[j], array[j+1] = array[j+1], array[j]
				swaped = true

			}

		}

		// If no swaps occurred, the array is already sorted and we can break
		if !swaped {
			break
		}

	}

	return array
}

func main() {
	fmt.Println(BubbleSort([]int{234, -3, 10, 43, -55, 0, 63, 5, 6, 235, 547}))
}
