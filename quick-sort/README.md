# What is Quick Sort?

Quicksort is a popular sorting algorithm that follows the divide-and-conquer paradigm. It was developed by Tony Hoare in 1960 and is known for its efficiency and widespread use in practice. The algorithm works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.

Here is a high-level overview of the Quicksort algorithm:

Select Pivot: Choose an element from the array as the pivot. There are various ways to choose a pivot; a common strategy is to pick the middle element.

Partitioning: Rearrange the elements of the array so that all elements less than the pivot come before it, and all elements greater than the pivot come after it. The pivot is now in its final sorted position.

Recursion: Recursively apply the above steps to the sub-arrays on the left and right of the pivot until the entire array is sorted.

The key to the efficiency of Quicksort lies in its partitioning step, which efficiently places the pivot in its final position. On average, Quicksort has a time complexity of O(n log n), making it one of the fastest sorting algorithms. However, in the worst case (when poorly chosen pivots lead to unbalanced partitions), it can degrade to O(n^2). To mitigate this, various optimizations and randomized strategies are employed in practice.
